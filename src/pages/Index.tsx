import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const POET_IMAGE = "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774118073/chandu_profile_pic_knmizc.jpg";

const featuredBooks = [
{
  title: "మట్టి రెక్కల చందమామ",
  desc: "ఎనిమిదవ తరగతిలో రాసిన మొదటి కవితా సంపుటి"
},
{
  title: "కాలుతున్న వెన్నెల",
  desc: "ఇంటర్మీడియట్ సమయంలో వెలువరించిన కవితా సంపుటి"
},
{
  title: "గొంతు తెగిన అక్షరం",
  desc: "డిగ్రీ మొదటి సంవత్సరంలో రచించిన పుస్తకం"
}];


export default function Index() {
  return (
    <Layout>
      {/* HERO — Newspaper style */}
      <section className="container max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="newspaper-rule" />
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start mt-6">
          {/* Poet image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={POET_IMAGE}
                alt="యువ కవి శీర్పి చంద్రశేఖర్"
                className="w-full max-w-[280px] aspect-[3/4] object-cover rounded-sm shadow-md" />
              
              <div className="mt-4 text-center">
                <p className="font-serif-telugu text-lg font-bold text-headline">
                  యువ కవి శీర్పి చంద్రశేఖర్
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="right" delay={100}>
            <h1 className="newspaper-headline text-3xl md:text-4xl lg:text-[2.75rem] text-balance leading-snug font-sans font-extrabold">సాహిత్య జగత్తులో ధృవతారగా
ఉదయిస్తున్న యువకవి 'శీర్పి చంద్రశేఖర్'

            </h1>
            <p className="mt-6 prose-telugu text-muted-foreground text-pretty">
              అనంతపురం జిల్లాకు చెందిన యువ కవి శీర్పి చంద్రశేఖర్, కేవలం 20 ఏళ్ల
              వయస్సులోనే ఐదు కవితా సంపుటాలను వెలువరించి సాహిత్య రంగంలో తనదైన ముద్ర
              వేస్తున్నారు.
            </p>
          </ScrollReveal>
        </div>
        <div className="section-divider mt-12" />
      </section>

      {/* FEATURED WORKS */}
      <section className="container max-w-5xl mx-auto px-6 py-16">
        <ScrollReveal>
          <h2 className="font-serif-telugu text-2xl md:text-3xl font-bold text-headline mb-10 text-balance">
            ప్రధాన రచనలు
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredBooks.map((book, i) => <ScrollReveal key={book.title} delay={i * 80}>
              <div className="group bg-surface rounded-sm p-6 transition-shadow duration-300 hover:shadow-lg cursor-default">
                <h3 className="font-serif-telugu text-xl font-semibold text-headline mb-3 text-balance">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans-telugu leading-relaxed mb-5">
                  {book.desc}
                </p>
                <Link
                to="/books"
                className="inline-block text-sm font-sans-telugu text-accent hover:underline underline-offset-4 transition-colors active:scale-95">
                
                  చదవండి →
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
        <div className="section-divider mt-16" />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container max-w-5xl mx-auto px-6 py-16">
        <ScrollReveal>
          <h2 className="font-serif-telugu text-2xl md:text-3xl font-bold text-headline mb-6 text-balance">
            పరిచయం
          </h2>
          <p className="prose-telugu text-muted-foreground text-pretty max-w-2xl">
            అనంతపురం జిల్లాకు చెందిన యువ కవి, సామాజిక స్పృహ కలిగిన అభ్యుదయ రచయిత.
            చిన్న వయస్సులోనే సాహిత్య రంగంలో తనదైన గుర్తింపు పొందారు.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 px-6 py-2.5 bg-primary text-primary-foreground font-sans-telugu text-sm rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]">
            
            మరింత చదవండి
          </Link>
        </ScrollReveal>
      </section>
    </Layout>);

}