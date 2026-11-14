import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Get featured gallery images (7 of them)
  const featuredGalleryImages = siteData.gallery.images
    .filter((img) => img.featured)
    .slice(0, 7);

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img
                                      src={siteData.hero.mainPortrait}
                                      alt="శీర్పి చంద్రశేఖర్"
                                      className="w-full max-w-md mx-auto md:max-w-lg rounded-2xl shadow-2xl object-cover object-top"
                                    />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <div className="mb-6">
                  <span className="text-2xl font-semibold text-primary">
                    {siteData.hero.headlineTop}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {siteData.hero.headlineName}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  {siteData.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                  >
                    <Link to="/books">{siteData.hero.titles[0]} చదవండి</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-2"
                  >
                    <Link to="/about">{siteData.hero.titles[1]} చదవండి</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Introduction & Titles (పరిచయం మరియు బిరుదులు) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                పరిచయం మరియు బిరుదులు
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                శీర్పి చంద్రశేఖర్ — <em>యువ తెలుగు కవి, రచయిత, సమాజ చైతన్యకారుడు.</em> కేవలం
                20 ఏళ్ల వయస్సులోనే ఐదు కవితా సంపుటాలను వెలువరించి, యువ తరానికి
                స్ఫూర్తి నిచ్చారు.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {siteData.hero.titles.map((title, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-lg py-3 px-4 font-medium"
                  >
                    {title}
                  </Badge>
                ))}
              </div>

              <div className="bg-muted/50 p-8 rounded-2xl border-l-4 border-primary">
                <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed">
                  <em>{siteData.hero.philosophyQuote}</em>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Books Preview (కవితా సంపుటాలు & సంకలనాలు) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                కవితా సంపుటాలు & సంకలనాలు
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {siteData.books.map((book) => (
                <Card
                  key={book.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={book.cover || "https://via.placeholder.com/300x400?text=ముండాలి"}
                      alt={book.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {book.id === 5 && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive" className="font-bold">
                          త్వరలో విడుదల
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {book.type}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      {book.stage}
                    </p>
                    <p className="text-sm mb-4 leading-relaxed">
                      {book.description}
                    </p>
                    {book.id <= 4 && (
                      <div className="space-y-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <a
                            href={book.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            చదవండి
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          <a
                            href={book.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            డౌన్‌లోడ్
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 text-lg bg-primary hover:bg-primary/90"
              >
                <Link to="/books">అన్ని రచనలు చూడండి</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Literary Journey (సాహిత్య ప్రయాణం) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                సాహిత్య ప్రయాణం
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* 2nd Class */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    <div className="w-1/2 pr-8 text-right">
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          2వ తరగతి
                        </h3>
                        <p className="text-muted-foreground">
                          "జీరంగి" పురుగుపై రాసిన తొలి కవిత
                        </p>
                      </Card>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="text-sm text-muted-foreground">
                        2001
                      </div>
                    </div>
                  </div>

                  {/* 8th Class - మట్టి రెక్కల చందమామ */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    <div className="w-1/2 pr-8">
                      <div className="text-sm text-muted-foreground text-right">
                        2008
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5">
                        <h3 className="text-xl font-bold mb-2">
                          8వ తరగతిలో
                        </h3>
                        <p className="font-semibold mb-2">మట్టి రెక్కల చందమామ</p>
                        <p className="text-sm text-muted-foreground">
                          తొలి కవితా సంపుటి
                        </p>
                      </Card>
                    </div>
                  </div>

                  {/* Intermediate - కాలుతున్న వెన్నెల */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    <div className="w-1/2 pr-8 text-right">
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          ఇంటర్మీడియట్
                        </h3>
                        <p className="font-semibold mb-2">కాలుతున్న వెన్నెల</p>
                        <p className="text-sm text-muted-foreground">
                          ఇంటర్మీడియట్ సమయంలో రచించిన కవితా సంపుటి
                        </p>
                      </Card>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="text-sm text-muted-foreground">
                        2012
                      </div>
                    </div>
                  </div>

                  {/* Degree - గొంతు తెగిన అక్షరం, రాతికన్ను, ఆకుపచ్చని దుఃఖం */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    <div className="w-1/2 pr-8">
                      <div className="text-sm text-muted-foreground text-right">
                        2018-2020
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow bg-primary/5">
                        <h3 className="text-xl font-bold mb-2">
                          డిగ్రీ ద్వితీయ సంవత్సరంలో
                        </h3>
                        <div className="space-y-2">
                          <p className="font-semibold">• గొంతు తెగిన అక్షరం</p>
                          <p className="font-semibold">• రాతికన్ను (రాయలసీమ కవితా సంకలనం)</p>
                          <p className="font-semibold">• ఆకుపచ్చని దుఃఖం (త్వరలో విడుదల)</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Awards & Felicitations (పురస్కారాలు మరియు సత్కారాలు) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                పురస్కారాలు మరియు సత్కారాలు
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteData.awards.map((award) => (
                <Card
                  key={award.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setLightboxImage(award.image)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Badge
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        క్లిక్ చేయండి ప zoom చేయడానికి
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    {award.description && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {award.description}
                      </p>
                    )}
                    {award.guests && (
                      <p className="text-xs text-muted-foreground italic">
                        {award.guests}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Newspaper & Bulletin Coverage (పత్రికా కథనాలు) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                పత్రికా కథనాలు
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteData.newspaperCoverage.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.paper}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Badge
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        క్లిక్ చేయండి ప zoom చేయడానికి
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.paper}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.date || "తేదీ తెలియదు"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Dega Online Monthly Magazine (డేగ ఆన్‌లైన్ మాసపత్రిక) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <img
                  src={siteData.hero.degaLogo}
                  alt="డేగ లాగో"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  డేగ ఆన్‌లైన్ మాసపత్రిక
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    వ్యవస్థాపకులు మరియు సంపాదకులు
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {siteData.initiatives[0].description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">
                        నవతరం కవులు, రచయితలను ప్రోత్సహించడం
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">
                        సాహిత్య వ్యక్తీకరణకు వేదిక కల్పించడం
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">
                        సామాజిక చైతన్యం పెంపొందించడం
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <div className="relative">
                  <img
                    src={siteData.gallery.images[21].url}
                    alt="డేగ మాసపత్రిక పేజీ"
                    className="w-full rounded-2xl shadow-xl object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg">
                    త్వరలో PDF లు అందుబాటులోకి
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 8: Youth Orbit (యూత్ ఆర్బిట్) */}
            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <ScrollReveal>
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        యూత్ ఆర్బిట్
                      </h2>
                      <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                    </div>
                  </div>
                </ScrollReveal>
      
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="relative">
                        <img
                          src={siteData.gallery.images[23].url}
                          alt="యూత్ ఆర్బిట్ కార్యక్రమం"
                          className="w-full rounded-2xl shadow-xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <Card className="p-8 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 text-primary">
                          వ్యవస్థాపకులు
                        </h3>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                          {siteData.initiatives[1].description}
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">
                              యువతలో నాయకత్వ లక్షణాలు
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">
                              సామాజిక బాధ్యత
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">
                              సేవా దృక్పథం
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">
                              సృజనాత్మకత
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">
                              అవగాహన పెంపొందించే వేదిక
                            </span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

      {/* Section 9: SUKAVI Food Processing Initiative (SUKAVI ఆహార ప్రాసెసింగ్ ఆలోచన) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <img
                  src={siteData.hero.sukaviLogo}
                  alt="SUKAVI లాగో"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  SUKAVI ఆహార ప్రాసెసింగ్ ఆలోచన
                </h2>
                <Badge
                  variant="outline"
                  className="text-lg px-6 py-2 border-2 border-primary text-primary"
                >
                  ప్రణాళిక దశలో ఉన్న ఆలోచన
                </Badge>
                <div className="w-24 h-1 bg-primary mx-auto mt-8" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    ఆవిష్కరణ సారాంశం
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    రైతుల టమోటా, మిరప వంటి వ్యవసాయ ఉత్పత్తులకు విలువ జోడించి
                    సాస్‌లు, ఇతర ఆహార ఉత్పత్తుల తయారీ ద్వారా గ్రామీణ
                    ఆర్థికాభివృద్ధికి తోడ్పడాలనే ఆహార ప్రాసెసింగ్
                    ఆలోచన.
                  </p>
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground italic">
                      <strong>గమనిక:</strong> ప్రస్తుతం ప్రణాళిక మరియు అభివృద్ధి దశలో ఉంది.
                      ఇది ఒక కార్యాచరణ కర్మాగారం కాదు.
                    </p>
                  </div>
                </Card>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src="https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505854/ch_meet_ju8mtb.jpg"
                      alt="రైతులతో భేటీ"
                      className="w-full rounded-lg object-cover shadow-md"
                    />
                    <img
                      src="https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505453/ch_stage1_pnfwpz.jpg"
                      alt="సాహిత్య వేదిక"
                      className="w-full rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <div className="pt-8">
                    <img
                      src="https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505452/ch_some_qxqvzn.jpg"
                      alt="శ్రామిక ఉత్సవ్"
                      className="w-full rounded-lg object-cover shadow-md mb-4"
                    />
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium">
                          యువ పారిశ్రామికవేత్త
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        వివిధ గ్రామీణ కమ్యూనిటీలతో క్రియాశీలంగా పాల్గొంటున్న
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 10: Featured Gallery & Contact (చిత్రమాలిక & సంప్రదించండి) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                చిత్రమాలిక & సంప్రదించండి
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Featured Gallery */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-8">ప్రముఖ చిత్రమాలిక</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredGalleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                      onClick={() => setLightboxImage(img.url)}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-32 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                        <Badge
                                                  variant="secondary"
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                                >
                                                  చూడండి
                                                </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="px-12 py-6 bg-primary hover:bg-primary/90"
                  >
                    <Link to="/gallery">గ్యాలరీ చూడండి</Link>
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-8">సంప్రదించండి</h3>
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">ఈమెయిల్</h4>
                      <p className="text-muted-foreground">
                        {siteData.contact.email}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">ఫేస్‌బుక్</h4>
                      <a
                        href={siteData.contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ఫేస్‌బుక్ ప్రొఫైల్
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">ఇన్‌స్టాగ్రామ్</h4>
                      <a
                        href={siteData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ఇన్‌స్టాగ్రామ్ ప్రొఫైల్
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <Button
              variant="secondary"
              className="absolute top-4 right-4"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
            >
              మూసివేయండి
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;