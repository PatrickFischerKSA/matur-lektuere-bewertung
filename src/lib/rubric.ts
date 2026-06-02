import type { CriterionId, ProductForm, RubricScore } from "./types";

export const productForms: ProductForm[] = [
  "Podcast",
  "Nachdichtung",
  "Gerichtsakte",
  "Lernfilm / BookTok",
  "digitale Lernlandschaft / Game",
  "Collage / Poster",
  "Essay",
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

export const commentBlocks = {
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

export const gradeScale = [
  { points: 20, grade: 6.0 },
  { points: 18, grade: 5.5 },
  { points: 16, grade: 5.0 },
  { points: 14, grade: 4.5 },
  { points: 12, grade: 4.0 },
  { points: 10, grade: 3.5 },
  { points: 8, grade: 3.0 }
];
