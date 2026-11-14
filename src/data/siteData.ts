export const siteData = {
  // A. Hero & Identity
  hero: {
    mainPortrait: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794489699/chandu_profile_dp_vdv6wh.jpg",
    earlierProfilePhoto:
      "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774118073/chandu_profile_pic_knmizc.jpg",
    degaLogo: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794489698/dega_logo_amh89s.jpg",
    sukaviLogo: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794489699/sukavi_logo_zhqkvm.jpg",
    // Slot for the యూత్ ఆర్బిట్ (Youth Orbit) logo — ready for a future URL.
    youthOrbitLogo: null as string | null,
    headlineTop: "ఒక కలం - ఒక కర్తవ్యం - ఒక చరిత్ర",
    headlineName: "శీర్పి చంద్రశేఖర్",
    subheadline:
      "ఒక పల్లె నేపథ్యం... ఎన్నో ఆలోచనల ప్రయాణం... సమాజం కోసం ఒక నిరంతర సంకల్పం",
    titles: [
      "కవి డేగ",
      "అభినవ వాల్మీకి",
      "రచయిత",
      "సంపాదకుడు",
      "యువ పారిశ్రామికవేత్త",
    ],
    penNames: ["శీర్పి", "వాల్మీకి"],
    philosophyQuote:
      "మన కన్నీళ్లను, గాయాలను ప్రపంచం ముందు ప్రదర్శించకూడదు. ప్రపంచపు కన్నీళ్లను, గాయాలను మనం బాధ్యతతో స్వీకరించి పరిష్కరించాలి.",
  },

  // B. Personal & Education Facts
  personal: {
    fullName: "శీర్పి చంద్రశేఖర్",
    dob: "02-08-2005",
    birthplace:
      "శీర్పి గ్రామం, బెళుగుప్ప మండలం, అనంతపురం జిల్లా, ఆంధ్రప్రదేశ్ (ఉరవకొండ నియోజకవర్గం)",
    parents: "తండ్రి బోయ శివశంకర్, తల్లి బోయ సరస్వతి (రైతు కుటుంబం)",
    parentsPhoto: {
      url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505479/ch_parents_shfzdi.jpg",
      caption: "శీర్పి చంద్రశేఖర్ తల్లిదండ్రులు శ్రీ బోయ శివశంకర్ గారు & శ్రీమతి బోయ సరస్వతి గారు",
    },
    education: [
      {
        stage: "పాఠశాల విద్య",
        place: "Zilla Parishad High School (ZPHS), Venkatadripalli, Seerpi Village",
      },
      {
        stage: "ఇంటర్మీడియట్",
        place: "Sri Vivekananda Junior College, Kalyandurgam",
      },
      {
        stage: "డిగ్రీ",
        place: "Mrs. A.V.N. Degree College, Visakhapatnam",
      },
    ],
    mentors: [
      {
        name: "శీర్పి శ్రీకాంత్",
        role: "క్రమశిక్షణ మరియు విలువలను నేర్పిన గురువు",
      },
      {
        name: "తిప్పేస్వామి",
        role: "రెండవ తరగతిలో 'జీరంగి' పురుగుపై రాసిన తొలి కవితను అభినందించి ప్రోత్సహించిన గురువు",
      },
      {
        name: "కొత్తపల్లి సురేష్",
        role: "ఎనిమిదవ తరగతిలో కవిత్వ రచన మరియు పఠనాసక్తిని పెంపొందించి సాహిత్య ప్రయాణంలో కీలక మలుపునకు కారణమైన గురువు",
      },
      {
        name: "వెంకటరమణ",
        role: "ఇంటర్మీడియట్ మరియు డిగ్రీ విద్య సమయంలో నాయకత్వ లక్షణాలు, పట్టుదల మరియు నైపుణ్యాల అభివృద్ధికి మార్గనిర్దేశం చేసిన గురువు",
      },
    ],
  },

  // C. Five Books
  books: [
    {
      id: 1,
      title: "మట్టి రెక్కల చందమామ",
      type: "కవితా సంపుటి",
      stage: "8వ తరగతిలో రాసిన తొలి కవితా సంపుటి",
      description:
        "ఈ పుస్తకంలోని కవిత్వంలో కవి శీర్పి చంద్రశేఖర్ గారి బాల్యంలో పరిశీలించిన సమాజం, ప్రకృతి ప్రతిబింబిస్తాయి.",
      cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774257957/matti_rekkala_irqwqr.jpg",
      pdf: "https://drive.google.com/file/d/1e3BJIfWTY2CWWgOhXyzT-qW4v4IJMkzY/view?usp=drive_link",
    },
    {
      id: 2,
      title: "కాలుతున్న వెన్నెల",
      type: "కవితా సంపుటి",
      stage: "ఇంటర్మీడియట్ చదువుతున్నప్పుడు రచించిన కవితా సంపుటి",
      description:
        "ఈ కవితా సంపుటిలో సమాజపు వ్యవస్థ తీరును, సమస్యల్ని ఎత్తిచూపుతూ, ప్రజల్ని చైతన్యవంతుల్ని చేయాలనే లక్ష్యంతో కవిత్వం రాశారు.",
      cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258199/kaluttuna_vennala_umyaqn.jpg",
      pdf: "https://drive.google.com/file/d/1N0OqXFd2wZ72VMRBasselFIN-ZbSz79r/view?usp=drive_link",
    },
    {
      id: 3,
      title: "గొంతు తెగిన అక్షరం",
      type: "కవితా సంపుటి",
      stage: "డిగ్రీ ద్వితీయ సంవత్సరంలో ఉన్నప్పుడు రచించిన కవితా సంపుటి",
      description:
        "ప్రపంచ సమాజాల్లో జరుగుతున్న అన్యాయాలపై, శ్రమదోపిడీపై, పెను సంక్షోభాలపై, పేదరికం, ఆకలి చావులు, అజ్ఞాన అంధకారంపై ప్రశ్నిస్తూ శాస్త్రీయ దృక్పథాన్ని పెంపొందిస్తూ యువతకు కొత్త చూపుని ఇచ్చేలా, సామాజిక బాధ్యతల్ని, స్పృహను, కర్తవ్యాన్ని గుర్తు చేసేలా కవిత్వాన్ని రాశారు.",
      cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258449/gontu_thegina_aksharam_xdohbr.jpg",
      pdf: "https://drive.google.com/file/d/1jlo0CBktb23m9ou7tUmAEjlSY3OrsCRv/view?usp=drive_link",
    },
    {
      id: 4,
      title: "రాతికన్ను",
      type: "రాయలసీమ కవితా సంకలనం",
      stage: "రాయలసీమ ప్రాంత సమస్యలపై కవితా సంకలనం",
      description:
        "కవి శీర్పి చంద్రశేఖర్ గారు చేసిన గొప్ప సాహసం ఇది. రాయలసీమ ప్రాంత సమస్యలపై బాధ్యతతో ప్రతి యువత స్పందించాలి అనే ధ్యేయంతో రాయలసీమలో ఉన్న యువకవుల్ని, రచయితల్ని కదిలించి కవిత్వం రాయించి, తన కవిత్వంతో కలిపి ఒక మహా కవితా సంకలనంగా తీసుకువచ్చి ప్రాంతంపై బాధ్యతను గుర్తు చేశారు.",
      cover: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258560/rathi_kannu_rwsrqm.jpg",
      pdf: "https://drive.google.com/file/d/14wptAB_qlYt6ttNlNwFYR_hNscgIgkBM/view?usp=drive_link",
    },
    {
      id: 5,
      title: "ఆకుపచ్చని దుఃఖం",
      type: "కవితా సంకలనం",
      stage: "త్వరలో విడుదల",
      description:
        "కవి శీర్పి చంద్రశేఖర్ ఉన్నత చదువు విశాఖపట్నంలో అభ్యసిస్తుండగా తాను పరిశీలించిన, పరిశోధించిన కళింగాంధ్ర (ఉత్తరాంధ్ర) చరిత్రపై, ప్రస్తుతం ఉత్తరాంధ్ర వెనుకబాటుతనంపై ఆ ప్రాంతంలో ఉన్న మహాకవుల, రచయితలతో కవిత్వం రాయించి మహా అక్షర యజ్ఞం చేస్తూ రూపొందిస్తున్న కవితా సంకలనం. సమస్యలపై ఒక పౌరుడిగా స్పందించడానికి ప్రాంతంతో సంబంధం లేదని నిరూపించారు.",
      cover: null,
      pdf: null,
    },
  ],

  // D. Awards & Felicitations (6 total)
  awards: [
    {
      id: 1,
      title: "చింతోజు బ్రహ్మయ్య బాలసాహిత్య పురస్కారం",
      description: "సాహిత్య ప్రపంచంలోకి బాలకవిగా శీర్పి చంద్రశేఖర్",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488662/ch2_xbz5td.jpg",
    },
    {
      id: 2,
      title: "పెందోట బాలసాహిత్య పురస్కారం",
      guests:
        "పాల్గొన్న ప్రముఖులు: పెందోట బాలసాహిత్య పీఠం వ్యవస్థాపకులు పెందోట వేంకటేశ్వర్లు గారు, ప్రముఖ రచయితలు సంగభట్ల చిన్న రామకృష్ణయ్య గారు, ఎన్నమెల్లి రాజమౌళి గారు, దుర్గయ్య గారు",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488661/ch_award_yzw4fd.jpg",
    },
    {
      id: 3,
      title: "నిజాం సాహిత్య పురస్కారం (సికింద్రాబాద్)",
      description:
        "సికింద్రాబాద్ లో నిజాం సాహిత్య పురస్కారాన్ని అందుకున్న యువకవి శీర్పి చంద్రశేఖర్",
      guests:
        "పాల్గొన్న ప్రముఖులు: ప్రముఖ సామాజిక విశ్లేషకులు, సాహితీవేత్త, కవి, రచయిత బి. ఎస్. రాములు గారు",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488662/ch_award_2_rycujq.jpg",
    },
    {
      id: 4,
      title: "కొనిరెడ్డి ఫౌందేషన్ ఘనసత్కారం (ప్రొద్దుటూరు)",
      description:
        "శీర్పి చంద్రశేఖర్ కు కొనిరెడ్డి ఫౌందేషన్ వారు ప్రొద్దుటూరులో ఘనసత్కారం",
      guests:
        "పాల్గొన్న ప్రముఖులు: కొనిరెడ్డి ఫౌందేషన్ అధినేత కొనిరెడ్డి శివచంద్రారెడ్డి గారు, కేంద్ర సాహిత్య అకాడమీ పురస్కార గ్రహీత డి.కె. చదువుల బాబు గారు",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488661/ch_award_3_hy9ogl.jpg",
    },
    {
      id: 5,
      title: "నెహ్రూ యువ కేంద్రం (Nehru Yuva Kendra) యూత్ ఫెస్ట్ – మొదటి బహుమతి (విశాఖపట్నం, 2024)",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488662/ch_award_4_bluzk2.jpg",
    },
    {
      id: 6,
      title: "శీర్పి చంద్రశేఖర్ కు ఘన సత్కారం (అనంతపురం)",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505854/ch_facilation_lufmwq.jpg",
    },
  ],

  // E. Newspaper & Bulletin Coverage (10 total)
  newspaperCoverage: [
    {
      id: 1,
      paper: "సాక్షి పత్రిక (అనంతపురం)",
      date: "04.10.2026",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794487936/ch_sakshi_paper_gh6xq0.jpg",
    },
    {
      id: 2,
      paper: "విజన్ తెలంగాణ",
      date: "ఫిబ్రవరి 2026",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488232/ch_vsion_tg_txae8x.jpg",
    },
    {
      id: 3,
      paper: "ఈనాడు (అనంతపురం)",
      date: "29 ఆగస్టు 2024",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488231/ch_eenadu_nrgvf3.jpg",
    },
    {
      id: 4,
      paper: "ఆంధ్రప్రభ",
      date: "1 అక్టోబర్ 2024",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488231/ch_andhraprabha_k14rxh.jpg",
    },
    {
      id: 5,
      paper: "సిద్దిపేట టైమ్స్",
      date: "6 అక్టోబర్ 2024",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488230/ch_siddipeta_times_juybku.jpg",
    },
    {
      id: 6,
      paper: "ప్రజాశక్తి",
      date: "1 అక్టోబర్ 2024",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488230/ch_prajasakhti_zsipby.jpg",
    },
    {
      id: 7,
      paper: "సూర్య పత్రిక",
      date: "9 మార్చి 2025",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488230/ch_surya_patrika_gzczlz.jpg",
    },
    {
      id: 8,
      paper: "జనప్రగతి",
      date: "జనవరి 11",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488710/ch_janapragathi_kukd3k.jpg",
    },
    {
      id: 9,
      paper: "సమాజహిత వారపత్రిక (విశాఖపట్నం)",
      date: "",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488663/ch_samhahitha_jap7ko.jpg",
    },
    {
      id: 10,
      paper: "రాయలసీమ విద్యావంతుల వేదిక బులిటిన్",
      date: "",
      image: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505450/ch_words_xipqia.jpg",
    },
  ],

  // F. Initiatives
  initiatives: [
    {
      title: "డేగ ఆన్‌లైన్ మాసపత్రిక",
      role: "వ్యవస్థాపకులు మరియు సంపాదకులు",
      description:
        "నవతరం కవులు, రచయితలను ప్రోత్సహించడం, సాహిత్య వ్యక్తీకరణకు వేదిక కల్పించడం, సామాజిక చైతన్యం పెంపొందించడం కోసం.",
    },
    {
      title: "యూత్ ఆర్బిట్ (Youth Orbit)",
      role: "వ్యవస్థాపకులు",
      description:
        "యువతలో నాయకత్వ లక్షణాలు, సామాజిక బాధ్యత, సేవా దృక్పథం, సృజనాత్మకత మరియు అవగాహన పెంపొందించే వేదిక.",
    },
    {
      title: "SUKAVI",
      role: "ప్రణాళిక దశలో ఉన్న ఆలోచన",
      description:
        "రైతుల టమోటా, మిరప వంటి వ్యవసాయ ఉత్పత్తులకు విలువ జోడించి సాస్‌లు, ఇతర ఆహార ఉత్పత్తుల తయారీ ద్వారా గ్రామీణ ఆర్థికాభివృద్ధికి తోడ్పడాలనే ఆహార ప్రాసెసింగ్ ఆలోచన (ప్రస్తుతం ప్రణాళిక మరియు అభివృద్ధి దశలో ఉంది).",
    },
  ],

  // F2. డేగ ఆన్‌లైన్ మాసపత్రిక — verified March–October 2026 issues
  degaIssues: [
    {
      id: 1,
      month: "మార్చి 2026",
      url: "https://drive.google.com/file/d/1t_yfxErxsbTk7drR2pbC-RYm-VCUg3fB/view?usp=drive_link",
    },
    {
      id: 2,
      month: "ఏప్రిల్ 2026",
      url: "https://drive.google.com/file/d/16caTrHdiaFQxTZsiB6VO3gH9LmQkLGKx/view?usp=drive_link",
    },
    {
      id: 3,
      month: "మే 2026",
      url: "https://drive.google.com/file/d/1Y-oJoaRNmZS2i9ivK6yDAppnUWTpncio/view?usp=drive_link",
    },
    {
      id: 4,
      month: "జూన్ 2026",
      url: "https://drive.google.com/file/d/1Nv4BmYQ8OC0HZBA6UPqzOPe-ACi3SeAn/view?usp=drive_link",
    },
    {
      id: 5,
      month: "జూలై 2026",
      url: "https://drive.google.com/file/d/1UqfLw5nSc4ksYM42xu1l9PboJUV4tP9i/view?usp=drive_link",
    },
    {
      id: 6,
      month: "ఆగస్టు 2026",
      url: "https://drive.google.com/file/d/1N31UhVkri0PLXnuYIbF0lbZJ_idtY91C/view?usp=drive_link",
    },
    {
      id: 7,
      month: "సెప్టెంబర్ 2026",
      url: "https://drive.google.com/file/d/1-WpM9qKADngerKtnMat1bYxeK8vrbRQu/view?usp=drive_link",
    },
    {
      id: 8,
      month: "అక్టోబర్ 2026",
      url: "https://drive.google.com/file/d/1Q8L7MKeRPFKQwJTO_I8lAT7H7HjdhwY-/view?usp=drive_link",
    },
  ],

  // G. Book Events
  bookEvents: [
    {
      id: 1,
      url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505450/ch_book_1_innmwo.jpg",
      caption: "'రాతికన్ను' పుస్తకావిష్కరణ సభలో శీర్పి చంద్రశేఖర్",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505451/ch_book_release_cwktl4.jpg",
      caption: "'కాలుతున్న వెన్నెల' పుస్తకావిష్కరణ సభ",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505454/ch_library_gmhiir.jpg",
      caption: "గ్రంథాలయాలలో శీర్పి చంద్రశేఖర్ పుస్తకాలు",
    },
  ],

  // H. Gallery & Contact
  gallery: {
    profileImage:
      "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774118073/chandu_profile_pic_knmizc.jpg",
    images: [
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258793/1dbdc4dc-7207-4bd2-9511-662fbabf27bd.png", caption: "గ్యాలరీ చిత్రం 1", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258823/795e13dd-f7ac-4e92-a592-d88222a543e2.png", caption: "గ్యాలరీ చిత్రం 2", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258884/100fed89-892e-4604-beb1-d37649c906c9.png", caption: "గ్యాలరీ చిత్రం 3", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258927/ffd4c2e9-3b19-4d36-8ecf-f150d6882944.png", caption: "గ్యాలరీ చిత్రం 4", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258958/52343fd9-b9b0-489f-9ba1-a29c137a842c.png", caption: "గ్యాలరీ చిత్రం 5", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774258992/afc03ece-f571-462e-bb23-4c9f5ec0c6ee.png", caption: "గ్యాలరీ చిత్రం 6", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259012/7d43c6ec-f356-4331-825a-2af682828ac2.png", caption: "గ్యాలరీ చిత్రం 7", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259019/bdee5b0d-68a4-49a6-a995-809dadf299ed.png", caption: "గ్యాలరీ చిత్రం 8", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259030/7a01a96c-7375-408b-8e37-20ebc3f5f865.png", caption: "గ్యాలరీ చిత్రం 9", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259049/bc5dcbe0-53cf-442f-8c7f-ffba63811297.png", caption: "గ్యాలరీ చిత్రం 10", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259067/28dc7d85-8e88-4e9f-b38a-90d5fc52bf98.png", caption: "గ్యాలరీ చిత్రం 11", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259087/d04d6243-483c-4bc6-9f6a-7d64f615dbe7.png", caption: "గ్యాలరీ చిత్రం 12", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259102/5c0e99b2-4015-4eed-8eb5-ae7eeb59a1ea.png", caption: "గ్యాలరీ చిత్రం 13", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259119/52c23f17-2a88-4e16-9a73-a1d63a046a0c.png", caption: "గ్యాలరీ చిత్రం 14", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259126/bd737e64-6908-48ab-903b-5f30da861651.png", caption: "గ్యాలరీ చిత్రం 15", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259132/5ac319a0-7c27-43c2-9370-e2adf67f0ba9.png", caption: "గ్యాలరీ చిత్రం 16", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259148/8cbe46b9-ee81-48ef-a171-c6566ae9179b.png", caption: "గ్యాలరీ చిత్రం 17", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259151/7b125b77-664d-4260-99a0-af438e991d6f.png", caption: "గ్యాలరీ చిత్రం 18", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259189/239374a3-2106-4978-bd64-5ae0c5caf2af.png", caption: "గ్యాలరీ చిత్రం 19", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259193/570a7699-0064-4b31-a76e-88e5ce9f3ee8.png", caption: "గ్యాలరీ చిత్రం 20", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1774259208/fcc47fcb-11b5-4fc4-b26d-fd745fff7426.png", caption: "గ్యాలరీ చిత్రం 21", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488662/ch_eenadu_2_yrlckg.jpg", caption: "గ్యాలరీ చిత్రం 22", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794488662/ch1_d1wrqj.jpg", caption: "గ్యాలరీ చిత్రం 23", category: "general", featured: false },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505854/ch_meet_ju8mtb.jpg", caption: "విశాఖపట్నంలో కవి మిత్రులతో యువకవి శీర్పి చంద్రశేఖర్", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505453/ch_stage1_pnfwpz.jpg", caption: "సాహిత్య వేదికపై శీర్పి చంద్రశేఖర్ ప్రసంగం", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505452/ch_some_qxqvzn.jpg", caption: "శ్రామిక ఉత్సవ్‌లో శీర్పి చంద్రశేఖర్", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505450/ch_book_1_innmwo.jpg", caption: "'రాతికన్ను' పుస్తకావిష్కరణ సభలో శీర్పి చంద్రశేఖర్", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505451/ch_book_release_cwktl4.jpg", caption: "'కాలుతున్న వెన్నెల' పుస్తకావిష్కరణ సభ", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505454/ch_library_gmhiir.jpg", caption: "గ్రంథాలయాలలో శీర్పి చంద్రశేఖర్ పుస్తకాలు", category: "events", featured: true },
      { url: "https://res.cloudinary.com/dtvcfs1lr/image/upload/v1794505451/ch_some1_ogrd2p.jpg", caption: "శీర్పి చంద్రశేఖర్ సాహిత్య కార్యక్రమ చిత్రం", category: "events", featured: false },
    ],
  },

  contact: {
    email: "Chandrasekharseerpi@gmail.com",
    facebook: "https://www.facebook.com/valmiki.chandu.899849",
    instagram: "https://www.instagram.com/seerpi_chandrasekhar_sukavi",
  },
} as const;

export type SiteData = typeof siteData;
