import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { X } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258793/1dbdc4dc-7207-4bd2-9511-662fbabf27bd.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258823/795e13dd-f7ac-4e92-a592-d88222a543e2.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258884/100fed89-892e-4604-beb1-d37649c906c9.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258927/ffd4c2e9-3b19-4d36-8ecf-f150d6882944.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258958/52343fd9-b9b0-489f-9ba1-a29c137a842c.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258992/afc03ece-f571-462e-bb23-4c9f5ec0c6ee.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259012/7d43c6ec-f356-4331-825a-2af682828ac2.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259019/bdee5b0d-68a4-49a6-a995-809dadf299ed.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259030/7a01a96c-7375-408b-8e37-20ebc3f5f865.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259049/bc5dcbe0-53cf-442f-8c7f-ffba63811297.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259067/28dc7d85-8e88-4e9f-b38a-90d5fc52bf98.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259087/d04d6243-483c-4bc6-9f6a-7d64f615dbe7.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259102/5c0e99b2-4015-4eed-8eb5-ae7eeb59a1ea.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259119/52c23f17-2a88-4e16-9a73-a1d63a046a0c.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259126/bd737e64-6908-48ab-903b-5f30da861651.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259132/5ac319a0-7c27-43c2-9370-e2adf67f0ba9.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259148/8cbe46b9-ee81-48ef-a171-c6566ae9179b.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259151/7b125b77-664d-4260-99a0-af438e991d6f.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259189/239374a3-2106-4978-bd64-5ae0c5caf2af.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259193/570a7699-0064-4b31-a76e-88e5ce9f3ee8.png",
  "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259208/fcc47fcb-11b5-4fc4-b26d-fd745fff7426.png",
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">గ్యాలరీ</h1>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <button
                onClick={() => setLightbox(i)}
                className="w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={src}
                  alt={`గ్యాలరీ చిత్రం ${i + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
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
            src={images[lightbox]}
            alt={`గ్యాలరీ చిత్రం ${lightbox + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
}
