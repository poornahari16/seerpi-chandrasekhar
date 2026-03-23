import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const books = [
  {
    title: "మట్టి రెక్కల చందమామ",
    desc: "ఎనిమిదవ తరగతిలో రాసిన మొదటి కవితా సంపుటి",
    cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774257957/matti_rekkala_irqwqr.jpg",
    pdf: "https://drive.google.com/file/d/1e3BJIfWTY2CWWgOhXyzT-qW4v4IJMkzY/view?usp=drive_link",
  },
  {
    title: "కాలుతున్న వెన్నెల",
    desc: "ఇంటర్మీడియట్ సమయంలో వెలువడిన కవితా సంపుటి",
    cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258199/kaluttuna_vennala_umyaqn.jpg",
    pdf: "https://drive.google.com/file/d/1N0OqXFd2wZ72VMRBasselFIN-ZbSz79r/view?usp=drive_link",
  },
  {
    title: "గొంతు తెగిన అక్షరం",
    desc: "ఇది మూడవ కవితా సంకలనం",
    cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258449/gontu_thegina_aksharam_xdohbr.jpg",
    pdf: "https://drive.google.com/file/d/1jlo0CBktb23m9ou7tUmAEjlSY3OrsCRv/view?usp=drive_link",
  },
  {
    title: "రాతికన్ను",
    desc: "ఇది రాయలసీమ కవితా సంకలనం",
    cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258560/rathi_kannu_rwsrqm.jpg",
    pdf: "https://drive.google.com/file/d/14wptAB_qlYt6ttNlNwFYR_hNscgIgkBM/view?usp=drive_link",
  },
];

export default function Books() {
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">రచనలు</h1>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <ScrollReveal key={book.title} delay={i * 80}>
              <div className="group bg-surface rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif-telugu text-xl font-semibold text-headline mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans-telugu leading-relaxed mb-4">
                    {book.desc}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-sans-telugu px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                    >
                      చదవండి
                    </a>
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-sans-telugu px-4 py-2 border border-border text-foreground rounded-sm hover:bg-muted transition-colors active:scale-[0.97]"
                    >
                      డౌన్‌లోడ్
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
}
