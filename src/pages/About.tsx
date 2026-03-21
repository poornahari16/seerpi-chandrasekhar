import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";

const personalDetails = [
  { label: "జన్మదినం", value: "02.08.2005" },
  { label: "ప్రాంతం", value: "ఆంధ్రప్రదేశ్, అనంతపురం జిల్లా, బెళుగుప్ప మండలం, శీర్పి గ్రామం" },
  { label: "తల్లిదండ్రులు", value: "సరస్వతి, శివశంకర్" },
];

const education = [
  { stage: "పదవ తరగతి", place: "జిల్లా పరిషత్ ఉన్నత పాఠశాల, వెంకటాద్రిపల్లి" },
  { stage: "ఇంటర్మీడియట్", place: "శ్రీ వివేకానంద జూనియర్ కళాశాల, కళ్యాణదుర్గం" },
  { stage: "డిగ్రీ", place: "మిసెస్ ఏ.వి.యన్ కళాశాల, విశాఖపట్నం" },
];

const gurus = [
  "శీర్పి శ్రీకాంత్ గారు",
  "తిప్పేస్వామి గారు",
  "కొత్తపల్లి సురేష్ గారు",
  "వెంకటరమణ గారు",
];

const books = [
  { title: "మట్టి రెక్కల చందమామ", desc: "ఎనిమిదవ తరగతిలో రాసిన మొదటి కవితా సంపుటి" },
  { title: "కాలుతున్న వెన్నెల", desc: "ఇంటర్మీడియట్ సమయంలో వెలువరించిన కవితా సంపుటి" },
  { title: "గొంతు తెగిన అక్షరం", desc: "డిగ్రీ మొదటి సంవత్సరంలో రచించిన పుస్తకం" },
  { title: "రాతికన్ను", desc: "రాయలసీమ సమస్యలపై రచన" },
  { title: "ఆకుపచ్చని దుఃఖం", desc: "ఉత్తరాంధ్ర జీవనశైలి నేపథ్యం" },
];

const awards = [
  "చింతోజు బ్రహ్మయ్య బాలసాహిత్య పురస్కారం",
  "పెందోట వెంకటేశ్వర్లు బాలసాహిత్య పురస్కారం",
  "నిజాం వెంకటేశం సాహిత్య పురస్కారం",
  "కొనిరెడ్డి ఫౌండేషన్ అభినందన",
  "యువ ఉత్సవ్ (విశాఖపట్నం) ప్రథమ స్థానం",
];

const socialWork = [
  "'డేగ' అంతర్జాల మాసపత్రిక సంపాదకత్వం",
  "యువతలో చైతన్యం కోసం కృషి",
  "యూత్ ఆర్బిట్ సంస్థ వ్యవస్థాపకుడు",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <h2 className="font-serif-telugu text-2xl md:text-3xl font-bold text-headline mb-6 text-balance">
        {children}
      </h2>
    </ScrollReveal>
  );
}

export default function About() {
  return (
    <Layout>
      <div className="container max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-20">

        {/* Section 1: పరిచయం */}
        <section>
          <SectionTitle>పరిచయం</SectionTitle>
          <ScrollReveal delay={60}>
            <p className="prose-telugu text-foreground text-pretty">
              అనంతపురం జిల్లాకు చెందిన యువ కిశోరం, సామాజిక స్పృహ కలిగిన అభ్యుదయ కవి
              శీర్పి చంద్రశేఖర్. కేవలం 20 ఏళ్ల ప్రాయంలోనే ఐదు కవితా సంపుటాలను
              వెలువరించి, సాహిత్య రంగంలో తనదైన ముద్ర వేస్తున్నారు.
            </p>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 2: వ్యక్తిగత వివరాలు */}
        <section>
          <SectionTitle>వ్యక్తిగత వివరాలు</SectionTitle>
          <ScrollReveal delay={60}>
            <dl className="space-y-4">
              {personalDetails.map((d) => (
                <div key={d.label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-sans-telugu font-semibold text-headline min-w-[140px] text-sm">{d.label}</dt>
                  <dd className="text-muted-foreground font-sans-telugu text-sm">{d.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="font-serif-telugu text-lg font-semibold text-headline mt-8 mb-4">విద్య</h3>
            <dl className="space-y-3">
              {education.map((e) => (
                <div key={e.stage} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-sans-telugu font-semibold text-headline min-w-[140px] text-sm">{e.stage}</dt>
                  <dd className="text-muted-foreground font-sans-telugu text-sm">{e.place}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 3: గురువులు */}
        <section>
          <SectionTitle>గురువులు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-2">
              {gurus.map((g) => (
                <li key={g} className="font-sans-telugu text-foreground text-base">
                  {g}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 4: రచనలు */}
        <section>
          <SectionTitle>రచనలు</SectionTitle>
          <div className="space-y-6">
            {books.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="bg-surface rounded-sm p-5">
                  <h3 className="font-serif-telugu text-lg font-semibold text-headline">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans-telugu mt-1">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 5: సామాజిక బాధ్యత */}
        <section>
          <SectionTitle>సామాజిక బాధ్యత</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-2">
              {socialWork.map((s) => (
                <li key={s} className="font-sans-telugu text-foreground text-base">
                  {s}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 6: పురస్కారాలు */}
        <section>
          <SectionTitle>పురస్కారాలు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-2">
              {awards.map((a) => (
                <li key={a} className="font-sans-telugu text-foreground text-base flex items-start gap-2">
                  <span className="text-accent mt-1">✦</span>
                  {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 7: ఆశయం */}
        <section>
          <SectionTitle>ఆశయం</SectionTitle>
          <ScrollReveal delay={60}>
            <blockquote className="border-l-4 border-accent pl-6 py-4">
              <p className="font-serif-telugu text-xl md:text-2xl leading-relaxed text-headline text-pretty italic">
                "యువతలో చైతన్యం నింపడం, సత్యాన్ని ప్రచారం చేయడం, ప్రతి పౌరుడికి
                సమాజం పట్ల బాధ్యతను పెంచడమే నా లక్ష్యం..."
              </p>
            </blockquote>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* Section 8: ప్రస్థానం */}
        <section>
          <SectionTitle>ప్రస్థానం</SectionTitle>
          <ScrollReveal delay={60}>
            <div className="prose-telugu text-foreground space-y-6 text-pretty">
              <p>
                అనంతపురం జిల్లా, బెళుగుప్ప మండలంలోని శీర్పి అనే చిన్న గ్రామంలో
                పుట్టిన చంద్రశేఖర్ చిన్నతనం నుండే సాహిత్యం పట్ల అమితమైన ఆసక్తి
                కలిగి ఉన్నారు. ఎనిమిదవ తరగతిలోనే తన మొదటి కవితా సంపుటి "మట్టి రెక్కల
                చందమామ"ను వెలువరించి, తన సాహిత్య ప్రస్థానానికి శ్రీకారం చుట్టారు.
              </p>
              <p>
                ఇంటర్మీడియట్ చదువుతూనే "కాలుతున్న వెన్నెల" అనే రెండవ కవితా
                సంపుటిని రాశారు. ఈ పుస్తకంలో యువతరం ఎదుర్కొంటున్న సమస్యలు,
                సామాజిక అసమానతలపై తన ఆవేదనను కవిత్వంగా మలిచారు.
              </p>
              <p>
                డిగ్రీ మొదటి సంవత్సరంలో "గొంతు తెగిన అక్షరం" పేరుతో మూడవ పుస్తకాన్ని
                ప్రచురించారు. ఈ రచనలో మానవ హక్కులు, వ్యక్తి స్వేచ్ఛ గురించి
                లోతైన కవితలు రాశారు. తర్వాత రాయలసీమ ప్రజల జీవన సమస్యలపై "రాతికన్ను"
                అనే పుస్తకాన్ని, ఉత్తరాంధ్ర జీవనశైలిపై "ఆకుపచ్చని దుఃఖం" అనే
                ఐదవ పుస్తకాన్ని వెలువరించారు.
              </p>
              <p>
                సాహిత్యంతో పాటు సామాజిక బాధ్యతను కూడా భుజాన వేసుకున్న చంద్రశేఖర్,
                "డేగ" అంతర్జాల మాసపత్రిక సంపాదకత్వం వహిస్తూ, యువతలో సాహిత్య
                చైతన్యాన్ని నింపే ప్రయత్నం చేస్తున్నారు. "యూత్ ఆర్బిట్" సంస్థ ద్వారా
                యువతరానికి దిశానిర్దేశం చేస్తున్నారు.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
}
