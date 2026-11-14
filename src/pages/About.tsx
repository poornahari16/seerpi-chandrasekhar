import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ZoomModal } from "@/components/ZoomModal";
import { DegaIssues } from "@/components/DegaIssues";
import { YouthOrbitLogo } from "@/components/YouthOrbitLogo";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

const personalDetails = [
{ label: "జన్మదినం", value: "02.08.2005" },
{ label: "ప్రాంతం", value: "ఆంధ్రప్రదేశ్, అనంతపురం జిల్లా, బెళుగుప్ప మండలం, శీర్పి గ్రామం" },
{ label: "తల్లిదండ్రులు", value: "సరస్వతి, శివశంకర్ (వ్యవసాయం)" },
{ label: "నివాసం", value: "శీర్పి గ్రామం, బెళుగుప్ప మండలం, అనంతపురం జిల్లా" }];


const education = siteData.personal.education;


const gurus = siteData.personal.mentors;


const books = siteData.books;


const awards = siteData.awards;


const birudulu = ["కవి డేగ", "అభినవ వాల్మీకి"];

const kalamPerlu = ["శీర్పి వాల్మీకి"];

function SectionTitle({ children }: {children: React.ReactNode;}) {
  return (
    <ScrollReveal>
      <h2 className="font-serif-telugu text-2xl md:text-3xl font-bold text-headline mb-6 text-balance">
        {children}
      </h2>
    </ScrollReveal>);

}

export default function About() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-20">

        {/* Header */}
        <section>
          <ScrollReveal>
            <h1 className="newspaper-headline text-3xl md:text-4xl mb-4">
              యువకవి <em>శీర్పి చంద్రశేఖర్</em>
            </h1>
            <p className="font-sans-telugu text-muted-foreground text-sm">
              జన్మదినం : 02.08.2005 · ఆంధ్రప్రదేశ్ అనంతపురం జిల్లా బెళుగుప్ప మండలం శీర్పి గ్రామం
            </p>
            <div className="section-divider mt-6" />
          </ScrollReveal>
        </section>

        {/* పరిచయం */}
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

        {/* వ్యక్తిగత వివరాలు */}
        <section>
          <SectionTitle>వ్యక్తిగత వివరాలు</SectionTitle>
          <ScrollReveal delay={60}>
            <dl className="space-y-4">
              {personalDetails.map((d) =>
              <div key={d.label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-sans-telugu font-semibold text-headline min-w-[140px] text-sm">{d.label}</dt>
                  <dd className="text-muted-foreground font-sans-telugu text-sm">{d.value}</dd>
                </div>
              )}
            </dl>

            <h3 className="font-serif-telugu text-lg font-semibold text-headline mt-8 mb-4">విద్య</h3>
            <dl className="space-y-3">
              {education.map((e) =>
              <div key={e.stage} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-sans-telugu font-semibold text-headline min-w-[140px] text-sm">{e.stage}</dt>
                  <dd className="text-muted-foreground font-sans-telugu text-sm">{e.place}</dd>
                </div>
              )}
            </dl>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* గురువులు */}
        <section>
          <SectionTitle>గురువులు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-4">
              {gurus.map((g) =>
              <li key={g.name} className="font-sans-telugu text-foreground text-base">
                  <span className="font-semibold">{g.name}</span>
                  <span className="block text-sm text-muted-foreground">{g.role}</span>
                </li>
              )}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* రచనలు */}
        <section>
          <SectionTitle>రచనలు</SectionTitle>
          <div className="space-y-6">
            {books.map((b, i) =>
            <ScrollReveal key={b.id} delay={i * 60}>
                <div className="bg-surface rounded-sm p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif-telugu text-lg font-semibold text-headline">{b.title}</h3>
                    {b.id === 5 && (
                      <Badge variant="destructive" className="shrink-0">
                        త్వరలో విడుదల
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans-telugu mt-1">{b.stage}</p>
                  <p className="text-sm text-muted-foreground font-sans-telugu mt-2 leading-relaxed">{b.description}</p>
                </div>
              </ScrollReveal>
            )}
          </div>
          <div className="section-divider mt-12" />
        </section>

        {/* సామాజిక బాధ్యత */}
        <section>
          <SectionTitle>సామాజిక బాధ్యత - నాయకత్వం</SectionTitle>
          <ScrollReveal delay={60}>
            <p className="prose-telugu text-foreground mb-6 text-pretty">
              సాహిత్య సృజనతో పాటు సామాజిక సేవా కార్యక్రమాల్లో చంద్రశేఖర్ చురుగ్గా పాల్గొంటున్నారు:
            </p>
            {/* డేగ ఆన్‌లైన్ మాసపత్రిక — logo only (no photographs) */}
            <div className="space-y-5">
              <div className="bg-surface rounded-sm p-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setZoomImage(siteData.hero.degaLogo)}
                    className="shrink-0 cursor-pointer"
                    aria-label="డేగ లోగో పెద్దగా చూడటానికి క్లిక్ చేయండి"
                  >
                    <img
                      src={siteData.hero.degaLogo}
                      alt="డేగ లోగో"
                      className="w-28 h-28 object-contain"
                    />
                  </button>
                  <div>
                    <h3 className="font-serif-telugu text-lg font-semibold text-headline">
                      'డేగ' అంతర్జాల మాసపత్రిక
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans-telugu mt-1">
                      ఈ పత్రికకు సంపాదకుడిగా వ్యవహరిస్తూ, అనేక మంది కొత్త కవులను
                      ప్రోత్సహిస్తూ సమాజ చైతన్యం కోసం కృషి చేస్తున్నారు
                    </p>
                    <p className="text-xs text-muted-foreground font-sans-telugu mt-2">
                      లోగోపై క్లిక్ చేస్తే పెద్దగా చూడవచ్చు
                    </p>
                  </div>
                </div>
              </div>

              {/* మార్చి – అక్టోబర్ 2026 సంచికలు */}
              <div>
                <h4 className="font-serif-telugu text-base font-semibold text-headline text-center mb-4">
                  మాసపత్రిక సంచికలు
                </h4>
                <DegaIssues />
              </div>

              {/* యూత్ ఆర్బిట్ — logo only (no photographs) */}
              <div className="bg-surface rounded-sm p-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="shrink-0">
                    <YouthOrbitLogo className="w-28 h-28" />
                  </div>
                  <div>
                    <h3 className="font-serif-telugu text-lg font-semibold text-headline">
                      యూత్ ఆర్బిట్ సంస్థ
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans-telugu mt-1">
                      ఈ సంస్థ వ్యవస్థాపకునిగా యువతలో స్ఫూర్తిని, సామాజిక
                      బాధ్యతను పెంపొందించే ఎన్నో కార్యక్రమాలకు శ్రీకారం
                      చుట్టారు
                    </p>
                  </div>
                </div>
              </div>

              {/* SUKAVI — logo only, planning/development stage */}
              <div className="bg-surface rounded-sm p-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setZoomImage(siteData.hero.sukaviLogo)}
                    className="shrink-0 cursor-pointer"
                    aria-label="SUKAVI లోగో పెద్దగా చూడటానికి క్లిక్ చేయండి"
                  >
                    <img
                      src={siteData.hero.sukaviLogo}
                      alt="SUKAVI లోగో"
                      className="w-28 h-28 object-contain"
                    />
                  </button>
                  <div>
                    <h3 className="font-serif-telugu text-lg font-semibold text-headline">
                      SUKAVI ఆహార ప్రాసెసింగ్ ఆలోచన
                    </h3>
                    <Badge
                      variant="outline"
                      className="mt-2 border-primary text-primary"
                    >
                      ప్రణాళిక మరియు అభివృద్ధి దశలో ఉన్న ఆలోచన
                    </Badge>
                    <p className="text-sm text-muted-foreground font-sans-telugu mt-2 leading-relaxed">
                      {siteData.initiatives[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Full-screen zoom modal for logos */}
          <ZoomModal
            src={zoomImage}
            onClose={() => setZoomImage(null)}
          />
          <div className="section-divider mt-12" />
        </section>

        {/* పురస్కారాలు */}
        <section>
          <SectionTitle>పురస్కారాలు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-3">
              {awards.map((a) =>
              <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => setZoomImage(a.image)}
                    className="w-full text-left bg-surface rounded-sm p-4 flex items-start gap-3 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-accent mt-1">✦</span>
                    <span>
                      <span className="font-sans-telugu text-foreground text-base">
                        {a.title}
                      </span>
                      {"description" in a && (
                        <span className="block text-sm text-muted-foreground font-sans-telugu mt-1">
                          {a.description}
                        </span>
                      )}
                      <span className="block text-xs text-muted-foreground font-sans-telugu mt-1">
                        పెద్దగా చూడటానికి క్లిక్ చేయండి
                      </span>
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* బిరుదులు */}
        <section>
          <SectionTitle>బిరుదులు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-2">
              {birudulu.map((b) =>
              <li key={b} className="font-sans-telugu text-foreground text-base flex items-start gap-2">
                  <span className="text-accent mt-1">✦</span>
                  {b}
                </li>
              )}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* కలం పేర్లు */}
        <section>
          <SectionTitle>కలం పేర్లు</SectionTitle>
          <ScrollReveal delay={60}>
            <ul className="space-y-2">
              {kalamPerlu.map((k) =>
              <li key={k} className="font-sans-telugu text-foreground text-base flex items-start gap-2">
                  <span className="text-accent mt-1">✦</span>
                  {k}
                </li>
              )}
            </ul>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* ఆశయం */}
        <section>
          <SectionTitle>ఆశయం</SectionTitle>
          <ScrollReveal delay={60}>
            <blockquote className="border-l-4 border-accent pl-6 py-4">
              <p className="font-serif-telugu text-xl md:text-2xl leading-relaxed text-headline text-pretty italic">
                "యువతలో చైతన్యం నింపడం, సత్యాన్ని ప్రచారం చేయడం, ప్రతి పౌరుడికి
                సమాజం పట్ల బాధ్యతను పెంచడమే నా లక్ష్యం. కవిత్వం రాయడం, పుస్తక
                ప్రచురణ చేయడం వల్ల నాలో నాయకత్వ లక్షణాలు, పోరాట పటిమ పెరిగాయి.
                తుదిశ్వాస వరకు సమాజ హితం కోసమే నా కలం శ్రమిస్తుంది."
              </p>
            </blockquote>
          </ScrollReveal>
          <div className="section-divider mt-12" />
        </section>

        {/* ప్రస్థానం */}
        <section>
          <SectionTitle>ప్రస్థానం</SectionTitle>
          <ScrollReveal delay={60}>
            <div className="prose-telugu text-foreground space-y-6 text-pretty">
              <p>
                రాయలసీమ అనంతపురం జిల్లాలోని ఉరవకొండ నియోజకవర్గం బెళుగుప్ప మండలంలోని
                ఒక చిన్న పల్లెటూరు శీర్పి అనే గ్రామంలో బోయ సరస్వతి, బోయ శివశంకర్
                దంపతులకు బోయ చంద్రశేఖర్ జన్మించారు. తన గ్రామంపై తనకున్న ప్రేమాభిమానంతో,
                బాధ్యతతో తన పేరు ముందు తన గ్రామం పేరు పెట్టుకున్నారు.
              </p>
              <p>
                చంద్రశేఖర్ లో చిన్నప్పటి నుండే ఊహలు చేయడం, మంచి ఆలోచనల్ని ఆచరణలోకి
                తీసుకురావడం, లోతుగా పరిశీలించడం, గొప్ప భావాల్ని వ్యక్తీకరించడం వంటి
                లక్షణాలు కుటుంబ సభ్యులు గమనించారు.
              </p>
              <p>
                ఐదేళ్ల వయస్సులో చంద్రశేఖర్ ను తన గ్రామంలో ఉన్న మండల పరిషత్ ప్రాథమిక
                పాఠశాలలో అక్షరాభ్యాసానికి చేర్పించారు. ఆ పాఠశాలలో మొదటి తరగతి నుంచే
                చిత్రలేఖనం, పాటలు పాడటం, నృత్యం చేయడం, ఊహించి కథలు చెప్పడం, లోతైన
                భావాలను మిత్రులతో పంచుకోవడం వంటి లక్షణాలను ఉపాధ్యాయులు గమనించి
                ప్రోత్సహించారు.
              </p>
              <p>
                చంద్రశేఖర్ కు తన శీర్పి గ్రామంలో గురువుగారు శీర్పి శ్రీకాంత్ గారు
                క్రమశిక్షణ నేర్పిస్తూ, అక్షరాలను రాయడం, పలకడం, చదువుపట్ల ఆసక్తి
                పెంచడం వంటి విషయాల్లో నిత్యం ప్రోత్సహించారు. గ్రామంపై బాధ్యతలు,
                విలువలు బోధించారు.
              </p>
              <p>ప్రకృతి ఒడిలో జీవరాశుల చలనాలను గమనించే చంద్రశేఖర్, తన ప్రాంతంలో కనిపించే "జీరంగి" అనే కీటకంపై రెండవ తరగతిలోనే అద్భుతమైన కవితను రచించారు. ఆ కవితను తన గురువు తిప్పేస్వామి గారికి చూపించి ప్రోత్సహాన్ని, ప్రేరణను అందుకున్నారు.




              </p>
              <p>
                జిల్లా పరిషత్ ఉన్నత పాఠశాల వెంకటాద్రిపల్లిలో చదువుతున్నప్పుడు,
                తెలుగు ఉపాధ్యాయుడు కొత్తపల్లి సురేష్ గారు చంద్రశేఖర్ లోని రచనా శక్తిని
                గుర్తించి, ప్రోత్సహించారు. ఆ ప్రోత్సాహం వల్లే ఆయన ఐదు కవితా
                పుస్తకాలను వెలువరించే స్థాయికి చేరుకున్నారు.
              </p>
              <p>
                సాహిత్య ప్రస్థానంలో ప్రముఖ కవయిత్రి స్వయంప్రభ గారు చంద్రశేఖర్ ను తన
                సాహిత్య పుత్రుడిగా ప్రకటించి ప్రోత్సహించారు.
              </p>
              <p>
                ఇంటర్మీడియట్ మరియు డిగ్రీ చదువుతున్న సమయంలో వెంకటరమణ గారు నాయకత్వ
                లక్షణాలు, పోరాట పటిమ, లక్ష్యసాధనకు అవసరమైన నైపుణ్యాలను నేర్పి,
                చంద్రశేఖర్ ను ఒక యువ శక్తిగా తీర్చిదిద్దారు.
              </p>
              <p>
                తల్లిదండ్రులు మరియు గురువుల ప్రోత్సాహంతో చంద్రశేఖర్ 20 ఏళ్ల
                వయస్సులోనే ఐదు కవితా పుస్తకాలను ప్రచురించి యువతకు ఆదర్శంగా
                నిలుస్తున్నారు. సమాజానికి ఉపయోగపడే అనేక కార్యాలను చేస్తూ తనదైన
                గుర్తింపును పొందుతున్నారు.
              </p>
              <p>
                ప్రపంచానికి తన గాయాలు, కన్నీళ్లు చూపించడం కంటే, సమాజంలోని బాధలను
                అర్థం చేసుకుని పరిష్కరించడమే ముఖ్యమని ఆయన నమ్మకం. తన గురువు చెప్పిన
                మాటలను ఆచరిస్తూ జీవిస్తున్నారు.
              </p>
              <p>
                బాల్యంలో అనేక కష్టాలను ఎదుర్కొన్నప్పటికీ, తన లక్ష్యాన్ని వదలకుండా
                ముందుకు సాగారు. తన గ్రామానికి గొప్ప చరిత్రను తీసుకురావాలని
                సంకల్పించారు.
              </p>
              <p>
                ప్రపంచానికి చెప్పాల్సింది ఇంకా చాలా ఉందని, చేయాల్సిన అద్భుతాలు
                మిగిలి ఉన్నాయని తన రచనల ద్వారా తెలియజేస్తున్నారు. ప్రముఖ కవులు,
                రచయితలు, మేధావులు, వ్యాపారవేత్తలు, రాజకీయ నాయకులు, జర్నలిస్టులు
                తదితరుల నుండి సత్కారాలు, ప్రోత్సాహాలు పొందుతూ ప్రజల అభిమానాన్ని
                సంపాదిస్తున్నారు.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </Layout>);

}