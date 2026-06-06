import {
  maturCommentBlocks,
  rubricCriteria,
  videoreportageCommentBlocks,
  videoreportageDeutschCriteria,
  videoreportageKommunikationCriteria,
  type CommentBlockCatalog,
  type RubricCriterion
} from "./rubric";
import type { FeedbackPrompt, MetaFieldConfig, MetaFieldLabels } from "./types";

export type ToolVariant = {
  id: "standard" | "ohne-reflexion" | "videoreportage-deutsch" | "videoreportage-kommunikation";
  departmentId: "matur" | "videoreportage";
  departmentLabel: string;
  href: "/" | "/ohne-reflexion" | "/videoreportage/deutsch" | "/videoreportage/kommunikation";
  navLabel: string;
  title: string;
  subtitle: string;
  criteria: RubricCriterion[];
  storageKey: string;
  exportLabel: string;
  commentBlocks: CommentBlockCatalog;
  metaConfig: MetaFieldConfig;
  metaLabels: MetaFieldLabels;
  feedbackPrompts: FeedbackPrompt[];
};

const standardCriteria = rubricCriteria;
const compactCriteria = rubricCriteria.filter((criterion) => criterion.id !== "reflexion");

const maturMetaConfig: MetaFieldConfig = {
  intro: "Stammdaten und Produktform für diese Rückmeldung.",
  readingTitleLabel: "Titel der Lektüre",
  readingTitlePlaceholder: "Werk",
  authorLabel: "Autorin oder Autor",
  authorPlaceholder: "Name",
  productFormLabel: "Produktform",
  productTitleLabel: "Titel des Lernprodukts",
  productTitlePlaceholder: "optional",
  customProductFormLabel: "Anderes Format",
  productFormOptions: [
    "Podcast",
    "Nachdichtung",
    "Gerichtsakte",
    "Lernfilm / BookTok",
    "digitale Lernlandschaft / Game",
    "Collage / Poster",
    "Essay",
    "anderes Format"
  ]
};

const videoMetaConfig: MetaFieldConfig = {
  intro: "Stammdaten und Reportagetitel für diese Bewertung der Videoreportage.",
  readingTitleLabel: "Titel der Videoreportage",
  readingTitlePlaceholder: "Beitragstitel",
  authorLabel: "Thema / Fokus",
  authorPlaceholder: "z. B. Schule im Fokus",
  productFormLabel: "Produktform",
  productTitleLabel: "Team / Gruppe",
  productTitlePlaceholder: "optional",
  customProductFormLabel: "Anderes Format",
  productFormOptions: ["Videoreportage"],
  hideProductForm: true,
  productFormLocked: true
};

const maturMetaLabels: MetaFieldLabels = {
  readingTitle: "Titel der Lektüre",
  author: "Autorin oder Autor",
  productForm: "Produktform",
  productTitle: "Titel des Lernprodukts",
  customProductForm: "Anderes Format"
};

const videoMetaLabels: MetaFieldLabels = {
  readingTitle: "Titel der Videoreportage",
  author: "Thema / Fokus",
  productForm: "Produktform",
  productTitle: "Team / Gruppe",
  customProductForm: "Anderes Format"
};

const maturFeedbackPrompts: FeedbackPrompt[] = [
  { key: "staerken", label: "Das gelingt besonders gut:" },
  { key: "lesart", label: "Hier wird eine eigenständige Lesart sichtbar:" },
  { key: "gewinn", label: "Daran könnte das Produkt noch gewinnen:" },
  { key: "gesamteindruck", label: "Gesamteindruck:" }
];

const videoFeedbackPrompts: FeedbackPrompt[] = [
  { key: "staerken", label: "Das gelingt in der Reportage besonders gut:" },
  { key: "lesart", label: "Inhalt, Gestaltung oder Wirkung fallen besonders auf:" },
  { key: "gewinn", label: "Daran könnte die Reportage noch gewinnen:" },
  { key: "gesamteindruck", label: "Gesamteindruck:" }
];

export const standardVariant: ToolVariant = {
  id: "standard",
  departmentId: "matur",
  departmentLabel: "Maturlektüre",
  href: "/",
  navLabel: "Standard",
  title: "Bewertungs- und Kommentartool",
  subtitle:
    "Bewertet wird nicht die gewählte Form an sich, sondern wie eigenständig, vertieft und textgerecht die Auseinandersetzung mit der Lektüre gelingt. Eine Inhaltszusammenfassung allein genügt nicht.",
  criteria: standardCriteria,
  storageKey: "matur-lektuere-bewertung:v1",
  exportLabel: "Maturlektüre-Bewertung",
  commentBlocks: maturCommentBlocks,
  metaConfig: maturMetaConfig,
  metaLabels: maturMetaLabels,
  feedbackPrompts: maturFeedbackPrompts
};

export const compactVariant: ToolVariant = {
  id: "ohne-reflexion",
  departmentId: "matur",
  departmentLabel: "Maturlektüre",
  href: "/ohne-reflexion",
  navLabel: "Ohne Reflexion",
  title: "Bewertungs- und Kommentartool ohne Reflexionskriterium",
  subtitle:
    "Diese Variante ist inhaltlich identisch, verzichtet aber auf das letzte Reflexionskriterium. Bewertet werden nur Textkenntnis, Deutung, Idee und Ausarbeitung.",
  criteria: compactCriteria,
  storageKey: "matur-lektuere-bewertung:ohne-reflexion:v1",
  exportLabel: "Maturlektüre-Bewertung ohne Reflexion",
  commentBlocks: maturCommentBlocks,
  metaConfig: maturMetaConfig,
  metaLabels: maturMetaLabels,
  feedbackPrompts: maturFeedbackPrompts
};

export const videoreportageDeutschVariant: ToolVariant = {
  id: "videoreportage-deutsch",
  departmentId: "videoreportage",
  departmentLabel: "Videoreportage",
  href: "/videoreportage/deutsch",
  navLabel: "Deutsch",
  title: "Bewertungstool Videoreportage · Fach Deutsch",
  subtitle:
    "Diese Sparte bewertet die inhaltlich-sprachliche Leistung der Videoreportage im Fach Deutsch auf Basis der 30-Punkte-Rubrik.",
  criteria: videoreportageDeutschCriteria,
  storageKey: "videoreportage-bewertung:deutsch:v1",
  exportLabel: "Videoreportage-Bewertung Deutsch",
  commentBlocks: videoreportageCommentBlocks,
  metaConfig: videoMetaConfig,
  metaLabels: videoMetaLabels,
  feedbackPrompts: videoFeedbackPrompts
};

export const videoreportageKommunikationVariant: ToolVariant = {
  id: "videoreportage-kommunikation",
  departmentId: "videoreportage",
  departmentLabel: "Videoreportage",
  href: "/videoreportage/kommunikation",
  navLabel: "Kommunikation",
  title: "Bewertungstool Videoreportage · Fach Kommunikation",
  subtitle:
    "Diese Sparte bewertet die gestalterisch-technische Leistung der Videoreportage im Fach Kommunikation auf Basis der 30-Punkte-Rubrik.",
  criteria: videoreportageKommunikationCriteria,
  storageKey: "videoreportage-bewertung:kommunikation:v1",
  exportLabel: "Videoreportage-Bewertung Kommunikation",
  commentBlocks: videoreportageCommentBlocks,
  metaConfig: videoMetaConfig,
  metaLabels: videoMetaLabels,
  feedbackPrompts: videoFeedbackPrompts
};

export const allVariants = [
  standardVariant,
  compactVariant,
  videoreportageDeutschVariant,
  videoreportageKommunikationVariant
];
