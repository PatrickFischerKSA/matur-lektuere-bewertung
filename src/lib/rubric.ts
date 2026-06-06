import type { CriterionId, ProductForm, RubricScore } from "./types";

export const productForms: ProductForm[] = [
  "Podcast",
  "Nachdichtung",
  "Gerichtsakte",
  "Lernfilm / BookTok",
  "digitale Lernlandschaft / Game",
  "Collage / Poster",
  "Essay",
  "Videoreportage",
  "anderes Format"
];

export type RubricLevel = {
  score: RubricScore;
  label: string;
  description: string;
};

export type RubricCriterion = {
  id: CriterionId;
  title: string;
  levels: RubricLevel[];
};

export type CommentBlockCatalog = Record<string, string[]>;

export const rubricCriteria: RubricCriterion[] = [
  {
    id: "textkenntnis",
    title: "Textkenntnis und Textbezug",
    levels: [
      {
        score: 4,
        label: "sehr überzeugend",
        description:
          "Das Produkt zeigt eine präzise Kenntnis des Werks. Figuren, Motive, Konflikte, Sprache oder Schlüsselstellen werden treffend einbezogen."
      },
      {
        score: 3,
        label: "überzeugend",
        description:
          "Das Werk ist gut verstanden; relevante Bezüge sind erkennbar und meist stimmig."
      },
      {
        score: 2,
        label: "teilweise überzeugend",
        description:
          "Grundzüge des Werks sind verstanden; Bezüge bleiben teilweise allgemein oder ungenau."
      },
      {
        score: 1,
        label: "wenig überzeugend",
        description:
          "Der Bezug zur Lektüre ist oberflächlich, fehlerhaft oder kaum erkennbar."
      }
    ]
  },
  {
    id: "deutung",
    title: "Deutung und geistige Vertiefung",
    levels: [
      {
        score: 4,
        label: "sehr überzeugend",
        description:
          "Das Produkt entwickelt eine eigenständige, differenzierte Lesart. Es eröffnet neue Einsichten und geht deutlich über Inhaltswiedergabe hinaus."
      },
      {
        score: 3,
        label: "überzeugend",
        description:
          "Eine eigene Deutung ist vorhanden und nachvollziehbar ausgearbeitet."
      },
      {
        score: 2,
        label: "teilweise überzeugend",
        description:
          "Ansätze einer Deutung sind erkennbar, werden aber wenig vertieft."
      },
      {
        score: 1,
        label: "wenig überzeugend",
        description:
          "Das Produkt bleibt vorwiegend bei Handlung, Nacherzählung oder unbegründeten Aussagen stehen."
      }
    ]
  },
  {
    id: "idee",
    title: "Idee und kreative Umsetzung",
    levels: [
      {
        score: 4,
        label: "sehr überzeugend",
        description:
          "Die gewählte Idee ist originell, überraschend und in besonderer Weise passend zum Werk. Die Form erzeugt einen echten Erkenntnisgewinn."
      },
      {
        score: 3,
        label: "überzeugend",
        description:
          "Die Idee ist passend und kreativ umgesetzt; die gewählte Form unterstützt die Auseinandersetzung mit dem Werk."
      },
      {
        score: 2,
        label: "teilweise überzeugend",
        description:
          "Die Form ist grundsätzlich passend, wird aber nur teilweise für eine vertiefte Beschäftigung genutzt."
      },
      {
        score: 1,
        label: "wenig überzeugend",
        description:
          "Die Form wirkt beliebig, wenig durchdacht oder lenkt vom Werk ab."
      }
    ]
  },
  {
    id: "ausarbeitung",
    title: "Ausarbeitung und Wirkung",
    levels: [
      {
        score: 4,
        label: "sehr überzeugend",
        description:
          "Das Produkt ist sorgfältig, stimmig und adressatengerecht gestaltet. Sprache, Aufbau und Gestaltung überzeugen durchgehend."
      },
      {
        score: 3,
        label: "überzeugend",
        description:
          "Das Produkt ist verständlich und insgesamt sorgfältig ausgeführt; kleinere Schwächen beeinträchtigen die Wirkung kaum."
      },
      {
        score: 2,
        label: "teilweise überzeugend",
        description:
          "Das Produkt ist nachvollziehbar, weist aber deutliche sprachliche, gestalterische oder organisatorische Schwächen auf."
      },
      {
        score: 1,
        label: "wenig überzeugend",
        description:
          "Das Produkt wirkt unfertig, schwer verständlich oder wenig sorgfältig gestaltet."
      }
    ]
  },
  {
    id: "reflexion",
    title: "Reflexion der eigenen Gestaltung",
    levels: [
      {
        score: 4,
        label: "sehr überzeugend",
        description:
          "Die Entscheidungen zur Form und Deutung werden klar und überzeugend begründet; der Bezug zum Werk wird reflektiert sichtbar gemacht."
      },
      {
        score: 3,
        label: "überzeugend",
        description:
          "Die wichtigsten Entscheidungen werden nachvollziehbar erklärt und mit dem Werk verbunden."
      },
      {
        score: 2,
        label: "teilweise überzeugend",
        description:
          "Die Reflexion bleibt knapp oder benennt Entscheidungen eher, als sie zu begründen."
      },
      {
        score: 1,
        label: "wenig überzeugend",
        description:
          "Eine Reflexion fehlt weitgehend oder bleibt ohne Bezug zum Werk."
      }
    ]
  }
];

export const videoreportageDeutschCriteria: RubricCriterion[] = [
  {
    id: "inhalt-aussage",
    title: "Inhalt & Aussage",
    levels: [
      { score: 6, label: "sehr stark", description: "Klares Thema; differenzierte Auseinandersetzung; erkennbare Fragestellung oder Perspektive." },
      { score: 5, label: "stark", description: "Inhaltlich klar fokussiert; die Aussage wird deutlich und gut verständlich entfaltet." },
      { score: 4, label: "solide", description: "Das Thema ist erkennbar, die Aussage bleibt aber nicht durchgehend präzise oder vertieft." },
      { score: 3, label: "ausbaufähig", description: "Ein Thema ist vorhanden, die Perspektive bleibt teilweise allgemein oder wenig zugespitzt." },
      { score: 2, label: "schwach", description: "Die Aussage bleibt unscharf; rote Linien oder zentrale Gedanken sind kaum entwickelt." },
      { score: 1, label: "sehr schwach", description: "Ein Thema ist nur in Ansätzen erkennbar; die Reportage wirkt inhaltlich beliebig." },
      { score: 0, label: "nicht erfüllt", description: "Keine nachvollziehbare inhaltliche Aussage oder kein erkennbarer Fokus." }
    ]
  },
  {
    id: "recherche-beobachtung",
    title: "Recherche & Beobachtung",
    levels: [
      { score: 6, label: "sehr stark", description: "Sinnvolle Informationen; passende Beispiele; interessante Beobachtungen oder Interviews." },
      { score: 5, label: "stark", description: "Die Recherche ist gut belegt und stützt die Reportage sichtbar." },
      { score: 4, label: "solide", description: "Relevante Informationen sind vorhanden, könnten aber noch gezielter oder anschaulicher eingesetzt werden." },
      { score: 3, label: "ausbaufähig", description: "Grundinformationen sind da, bleiben aber eher oberflächlich oder wenig konkret." },
      { score: 2, label: "schwach", description: "Die Reportage stützt sich auf zu wenige oder wenig passende Beobachtungen und Beispiele." },
      { score: 1, label: "sehr schwach", description: "Recherche und Beobachtung bleiben bruchstückhaft oder kaum belastbar." },
      { score: 0, label: "nicht erfüllt", description: "Es fehlen erkennbare Rechercheleistungen oder beobachtende Zugriffe." }
    ]
  },
  {
    id: "dramaturgie-aufbau",
    title: "Dramaturgie & Aufbau",
    levels: [
      { score: 6, label: "sehr stark", description: "Roter Faden; nachvollziehbare Struktur; sinnvolle Übergänge." },
      { score: 5, label: "stark", description: "Der Aufbau trägt die Reportage sicher und führt klar durch das Thema." },
      { score: 4, label: "solide", description: "Die Struktur ist erkennbar, wirkt aber nicht überall gleich zwingend." },
      { score: 3, label: "ausbaufähig", description: "Aufbau und Übergänge funktionieren teilweise, bleiben aber an einigen Stellen sprunghaft." },
      { score: 2, label: "schwach", description: "Die Dramaturgie wirkt unsicher; Teile stehen eher nebeneinander als miteinander." },
      { score: 1, label: "sehr schwach", description: "Der Aufbau ist schwer nachvollziehbar; Übergänge fehlen weitgehend." },
      { score: 0, label: "nicht erfüllt", description: "Keine erkennbare Struktur oder Dramaturgie." }
    ]
  },
  {
    id: "sprachliche-gestaltung",
    title: "Sprachliche Gestaltung",
    levels: [
      { score: 6, label: "sehr stark", description: "Verständliche und präzise Sprache; passende Moderation oder Kommentare." },
      { score: 5, label: "stark", description: "Die sprachliche Gestaltung ist sicher, gut verständlich und passend zum Format." },
      { score: 4, label: "solide", description: "Die Sprache trägt die Reportage, bleibt aber stellenweise etwas allgemein oder ungenau." },
      { score: 3, label: "ausbaufähig", description: "Die sprachliche Ebene ist verständlich, aber nicht durchgehend präzise oder adressatengerecht." },
      { score: 2, label: "schwach", description: "Sprache und Moderation bleiben mehrfach unklar, unpassend oder ungeschliffen." },
      { score: 1, label: "sehr schwach", description: "Die sprachliche Gestaltung erschwert das Verständnis deutlich." },
      { score: 0, label: "nicht erfüllt", description: "Es ist keine tragfähige sprachliche Gestaltung erkennbar." }
    ]
  },
  {
    id: "reflexion-eigenstaendigkeit",
    title: "Reflexion & Eigenständigkeit",
    levels: [
      { score: 6, label: "sehr stark", description: "Eigene Ideen; kritische oder originelle Sichtweise; gedankliche Tiefe." },
      { score: 5, label: "stark", description: "Die Reportage zeigt eine eigenständige Handschrift und reflektierte Entscheidungen." },
      { score: 4, label: "solide", description: "Eigene Akzente sind erkennbar, könnten aber noch mutiger oder tiefer ausfallen." },
      { score: 3, label: "ausbaufähig", description: "Ansätze von Eigenständigkeit sind vorhanden, bleiben aber eher vorsichtig oder konventionell." },
      { score: 2, label: "schwach", description: "Eigene Ideen oder reflektierte Entscheidungen treten nur selten hervor." },
      { score: 1, label: "sehr schwach", description: "Die Reportage bleibt stark schematisch und wenig eigenständig." },
      { score: 0, label: "nicht erfüllt", description: "Keine erkennbare Eigenständigkeit oder Reflexion." }
    ]
  }
];

export const videoreportageKommunikationCriteria: RubricCriterion[] = [
  {
    id: "bildgestaltung",
    title: "Bildgestaltung",
    levels: [
      { score: 6, label: "sehr stark", description: "Bewusste Kameraführung; abwechslungsreiche Einstellungen; passende Bildsprache." },
      { score: 5, label: "stark", description: "Die Bilder sind sicher geführt und unterstützen die Wirkung der Reportage klar." },
      { score: 4, label: "solide", description: "Die Bildgestaltung funktioniert gut, könnte aber noch bewusster oder abwechslungsreicher eingesetzt werden." },
      { score: 3, label: "ausbaufähig", description: "Es gibt passende Bilder, die visuelle Gestaltung bleibt aber teilweise etwas beliebig." },
      { score: 2, label: "schwach", description: "Bildsprache und Kameraarbeit wirken mehrfach unentschieden oder wenig passend." },
      { score: 1, label: "sehr schwach", description: "Die visuelle Gestaltung trägt die Reportage kaum." },
      { score: 0, label: "nicht erfüllt", description: "Keine erkennbare gestalterische Bildführung." }
    ]
  },
  {
    id: "ton-verstaendlichkeit",
    title: "Ton & Verständlichkeit",
    levels: [
      { score: 6, label: "sehr stark", description: "Verständlicher Ton; sinnvoll eingesetzte Musik und Geräusche." },
      { score: 5, label: "stark", description: "Der Ton ist gut verständlich und wird wirkungsvoll eingesetzt." },
      { score: 4, label: "solide", description: "Die Tonspur funktioniert insgesamt, weist aber kleinere Schwächen auf." },
      { score: 3, label: "ausbaufähig", description: "Die Verständlichkeit ist teilweise gegeben, wird aber nicht durchgehend gesichert." },
      { score: 2, label: "schwach", description: "Tonprobleme oder unpassende Einsätze stören die Wirkung mehrfach." },
      { score: 1, label: "sehr schwach", description: "Die Tonspur erschwert das Verstehen deutlich." },
      { score: 0, label: "nicht erfüllt", description: "Ton und Verständlichkeit sind nicht tragfähig." }
    ]
  },
  {
    id: "schnitt-technik",
    title: "Schnitt & Technik",
    levels: [
      { score: 6, label: "sehr stark", description: "Sauberer Schnitt; Rhythmus; technische Sorgfalt." },
      { score: 5, label: "stark", description: "Schnitt und Technik sind sicher und stützen die Reportage sichtbar." },
      { score: 4, label: "solide", description: "Technisch insgesamt ordentlich, aber noch mit einzelnen Brüchen oder Unsauberkeiten." },
      { score: 3, label: "ausbaufähig", description: "Der Schnitt funktioniert teilweise, wirkt aber noch uneinheitlich oder wenig rhythmisiert." },
      { score: 2, label: "schwach", description: "Technische Schwächen oder unsaubere Schnitte beeinträchtigen das Produkt deutlich." },
      { score: 1, label: "sehr schwach", description: "Schnitt und Technik sind kaum tragfähig." },
      { score: 0, label: "nicht erfüllt", description: "Keine hinreichend funktionierende technische Umsetzung." }
    ]
  },
  {
    id: "kreativitaet-wirkung",
    title: "Kreativität & Wirkung",
    levels: [
      { score: 6, label: "sehr stark", description: "Gestalterische Eigenständigkeit; Atmosphäre; kreative Umsetzung." },
      { score: 5, label: "stark", description: "Die Reportage entwickelt eine klare Wirkung und zeigt gestalterische Ideen." },
      { score: 4, label: "solide", description: "Wirkung und Kreativität sind erkennbar, könnten aber stärker ausgereizt werden." },
      { score: 3, label: "ausbaufähig", description: "Es gibt erste gestalterische Ansätze, die Wirkung bleibt aber begrenzt." },
      { score: 2, label: "schwach", description: "Die Reportage wirkt gestalterisch eher schematisch oder wenig atmosphärisch." },
      { score: 1, label: "sehr schwach", description: "Kaum kreative oder wirkungsbezogene Entscheidungen erkennbar." },
      { score: 0, label: "nicht erfüllt", description: "Keine erkennbare gestalterische Wirkung." }
    ]
  },
  {
    id: "arbeitsprozess-zusammenarbeit",
    title: "Arbeitsprozess & Zusammenarbeit",
    levels: [
      { score: 6, label: "sehr stark", description: "Planung; Rollenverteilung; konstruktive Zusammenarbeit." },
      { score: 5, label: "stark", description: "Der Arbeitsprozess ist gut organisiert und die Zusammenarbeit sichtbar produktiv." },
      { score: 4, label: "solide", description: "Arbeitsprozess und Zusammenarbeit tragen das Produkt, könnten aber noch klarer strukturiert sein." },
      { score: 3, label: "ausbaufähig", description: "Zusammenarbeit und Planung sind teilweise erkennbar, aber nicht durchgehend stimmig." },
      { score: 2, label: "schwach", description: "Der Arbeitsprozess wirkt unsicher oder die Rollen bleiben unklar." },
      { score: 1, label: "sehr schwach", description: "Zusammenarbeit und Organisation sind kaum erkennbar." },
      { score: 0, label: "nicht erfüllt", description: "Kein nachvollziehbarer Arbeitsprozess und keine erkennbare Zusammenarbeit." }
    ]
  }
];

export const maturCommentBlocks: CommentBlockCatalog = {
  "Sehr überzeugend": [
    "Eine überraschende und zugleich sehr textnahe Idee.",
    "Die gewählte Form macht eine eigenständige Lesart des Werks sichtbar.",
    "Besonders stark ist, wie zentrale Konflikte des Textes neu perspektiviert werden.",
    "Das Produkt geht deutlich über eine Inhaltswiedergabe hinaus.",
    "Die kreative Umsetzung ist nicht bloss originell, sondern auch interpretatorisch ergiebig."
  ],
  "Solide, aber ausbaufähig": [
    "Die Idee passt zum Werk, die Deutung könnte jedoch noch konsequenter vertieft werden.",
    "Der Textbezug ist vorhanden, bleibt an einzelnen Stellen aber allgemein.",
    "Die Form ist ansprechend; ihr interpretatorisches Potenzial wird noch nicht vollständig genutzt.",
    "Mehr konkrete Bezüge zu Schlüsselstellen oder Motiven hätten die Wirkung verstärkt.",
    "Die eigenständige Perspektive ist erkennbar, müsste aber stärker begründet werden."
  ],
  Kritisch: [
    "Das Produkt informiert eher über die Handlung, als dass es eine eigene Lesart entwickelt.",
    "Die kreative Form ist erkennbar, bleibt aber zu wenig mit dem Werk verbunden.",
    "Wesentliche Aussagen werden nicht ausreichend aus der Lektüre heraus begründet.",
    "Für eine Maturlektüre fehlt die vertiefte Auseinandersetzung mit dem Text.",
    "Die Gestaltungsidee ersetzt an mehreren Stellen eine genaue Textarbeit."
  ]
};

export const videoreportageCommentBlocks: CommentBlockCatalog = {
  "Sehr gelungen": [
    "Die Reportage setzt einen klaren Schwerpunkt und bleibt in ihrer Aussage konsequent.",
    "Besonders stark ist die Verbindung von Beobachtung, Gestaltung und nachvollziehbarer Wirkung.",
    "Die gewählten Mittel wirken bewusst eingesetzt und stützen das Thema sichtbar.",
    "Das Produkt zeigt eine eigenständige Handschrift und eine sichere mediale Umsetzung.",
    "Inhalt, Aufbau und Gestaltung greifen überzeugend ineinander."
  ],
  "Solide, aber ausbaufähig": [
    "Die Grundidee ist tragfähig, könnte aber in Aussage oder Wirkung noch klarer zugespitzt werden.",
    "Die Reportage funktioniert insgesamt, würde aber von präziserer Auswahl und stärkerer Verdichtung profitieren.",
    "Mehr gestalterische Konsequenz würde die Wirkung des Beitrags deutlich erhöhen.",
    "Inhaltlich sind gute Ansätze sichtbar, die noch stärker mit Bild, Ton oder Aufbau verbunden werden könnten.",
    "Die Zusammenarbeit beziehungsweise Planung ist erkennbar, aber noch nicht in allen Teilen gleich überzeugend."
  ],
  Kritisch: [
    "Der Beitrag bleibt in Aussage und Aufbau noch zu unklar oder zu wenig fokussiert.",
    "Die eingesetzten Mittel wirken eher nebeneinander als dramaturgisch aufeinander abgestimmt.",
    "Recherche, Gestaltung oder Technik tragen die Reportage noch nicht zuverlässig.",
    "Wichtige Entscheidungen werden medial noch nicht präzise genug umgesetzt.",
    "Für eine überzeugende Videoreportage fehlen noch Klarheit, Sorgfalt und gestalterische Konsequenz."
  ]
};

export const gradeScale = [
  { points: 20, grade: 6.0 },
  { points: 18, grade: 5.5 },
  { points: 16, grade: 5.0 },
  { points: 14, grade: 4.5 },
  { points: 12, grade: 4.0 },
  { points: 10, grade: 3.5 },
  { points: 8, grade: 3.0 }
];
