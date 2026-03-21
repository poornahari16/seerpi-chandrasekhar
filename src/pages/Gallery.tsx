import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Gallery() {
  return (
    <Layout>
      <div className="container max-w-3xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-6">గ్యాలరీ</h1>
          <div className="section-divider mb-10" />
          <p className="prose-telugu text-muted-foreground">
            త్వరలో ఫోటోలు మరియు కార్యక్రమాల చిత్రాలు ఇక్కడ అందుబాటులో ఉంటాయి.
          </p>
        </ScrollReveal>
      </div>
    </Layout>
  );
}
