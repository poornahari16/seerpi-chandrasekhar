import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ZoomModal } from "@/components/ZoomModal";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

export default function AllGallery() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [zoomAlt, setZoomAlt] = useState<string>("చిత్రం");

  const openZoom = (url: string, alt: string) => {
    setZoomAlt(alt);
    setZoomImage(url);
  };

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">
            అన్ని చిత్రాలు
          </h1>
          <div className="section-divider mb-6" />
          <p className="font-sans-telugu text-muted-foreground text-sm mb-10">
            గ్యాలరీలోని అన్ని చిత్రాల సమాహారం
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteData.gallery.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 30}>
              <button
                onClick={() => openZoom(img.url, img.caption)}
                className="relative w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Badge
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                  >
                    పెద్దగా చూడటానికి క్లిక్ చేయండి
                  </Badge>
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Full-screen zoom modal */}
      <ZoomModal
        src={zoomImage}
        alt={zoomAlt}
        onClose={() => setZoomImage(null)}
      />
    </Layout>
  );
}
