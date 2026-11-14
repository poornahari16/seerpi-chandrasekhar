import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { X } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function AllGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">
            గ్యారీ
          </h1>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteData.gallery.images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 30}>
              <button
                onClick={() => setLightbox(img.url)}
                className="w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    చూడండి
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightbox}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
