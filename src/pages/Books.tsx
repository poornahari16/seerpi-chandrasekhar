import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ZoomModal } from "@/components/ZoomModal";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

export default function Books() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">రచనలు</h1>
          <div className="section-divider mb-6" />
          <p className="font-sans-telugu text-muted-foreground text-sm mb-10">
            శీర్పి చంద్రశేఖర్ — ఐదు కవితా సంపుటాలు
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {siteData.books.map((book, i) => (
            <ScrollReveal key={book.id} delay={i * 80}>
              <div className="group bg-surface rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="overflow-hidden">
                  {book.cover ? (
                    <button
                      onClick={() => setZoomImage(book.cover)}
                      className="w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={`${book.title} — పెద్దగా చూడటానికి క్లిక్ చేయండి`}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="sr-only">పెద్దగా చూడటానికి క్లిక్ చేయండి</span>
                    </button>
                  ) : (
                    <div className="w-full aspect-[3/4] bg-muted/40 flex flex-col items-center justify-center gap-4 p-6 text-center">
                      <Badge
                        variant="destructive"
                        className="font-bold text-sm px-4 py-2"
                      >
                        త్వరలో విడుదల
                      </Badge>
                      <span className="text-sm text-muted-foreground font-sans-telugu">
                        పుస్తక ముఖచిత్రం త్వరలో
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif-telugu text-xl font-semibold text-headline mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans-telugu leading-relaxed mb-2">
                    {book.type}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans-telugu leading-relaxed mb-4">
                    {book.stage}
                  </p>
                  {book.pdf ? (
                    <div className="flex gap-3">
                      <a
                        href={book.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-sans-telugu px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                      >
                        ఆన్‌లైన్‌లో చదవండి
                      </a>
                      <a
                        href={book.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-sans-telugu px-4 py-2 border border-border text-foreground rounded-sm hover:bg-muted transition-colors active:scale-[0.97]"
                      >
                        PDF డౌన్‌లోడ్
                      </a>
                    </div>
                  ) : (
                    <Badge variant="outline" className="border-primary text-primary">
                      త్వరలో విడుదల
                    </Badge>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Full-screen zoom modal */}
      <ZoomModal
        src={zoomImage}
        alt="పుస్తక ముఖచిత్రం"
        onClose={() => setZoomImage(null)}
      />
    </Layout>
  );
}
