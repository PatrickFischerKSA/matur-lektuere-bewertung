import { rubricCriteria } from "./rubric";
import type { CriterionId } from "./types";

export type ToolVariant = {
  id: "standard" | "ohne-reflexion";
  href: "/" | "/ohne-reflexion";
  navLabel: string;
  title: string;
  subtitle: string;
  criteria: CriterionId[];
  storageKey: string;
  exportLabel: string;
};

const standardCriteria = rubricCriteria.map((criterion) => criterion.id);
const compactCriteria = standardCriteria.filter((id) => id !== "reflexion");

export const standardVariant: ToolVariant = {
  id: "standard",
  href: "/",
  navLabel: "Standard",
  title: "Bewertungs- und Kommentartool",
  subtitle:
    "Bewertet wird nicht die gewählte Form an sich, sondern wie eigenständig, vertieft und textgerecht die Auseinandersetzung mit der Lektüre gelingt. Eine Inhaltszusammenfassung allein genügt nicht.",
  criteria: standardCriteria,
  storageKey: "matur-lektuere-bewertung:v1",
  exportLabel: "Standardtool"
};

export const compactVariant: ToolVariant = {
  id: "ohne-reflexion",
  href: "/ohne-reflexion",
  navLabel: "Ohne Reflexion",
  title: "Bewertungs- und Kommentartool ohne Reflexionskriterium",
  subtitle:
    "Diese Variante ist inhaltlich identisch, verzichtet aber auf das letzte Reflexionskriterium. Bewertet werden nur Textkenntnis, Deutung, Idee und Ausarbeitung.",
  criteria: compactCriteria,
  storageKey: "matur-lektuere-bewertung:ohne-reflexion:v1",
  exportLabel: "Variante ohne Reflexionskriterium"
};

export const allVariants = [standardVariant, compactVariant];
