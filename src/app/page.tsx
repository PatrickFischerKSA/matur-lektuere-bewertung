"use client";

import { useEffect, useMemo, useState } from "react";
import { FeedbackSection } from "@/components/FeedbackSection";
import { MetaForm } from "@/components/MetaForm";
import { RubricCard } from "@/components/RubricCard";
import { SummaryPanel } from "@/components/SummaryPanel";
import { createEmptyDraft } from "@/lib/defaultDraft";
import { rubricCriteria } from "@/lib/rubric";
import {
  calculateGrade,
  calculateTotalPoints,
  getCompletedCriteriaCount,
  validateAssessment
} from "@/lib/scoring";
import type { AssessmentDraft } from "@/lib/types";
import { buildWordDocumentHtml, createWordExportFilename } from "@/lib/wordExport";

const storageKey = "matur-lektuere-bewertung:v1";

export default function Home() {
  const [draft, setDraft] = useState<AssessmentDraft>(() => createEmptyDraft());
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);

    if (saved) {
      try {
        setDraft(JSON.parse(saved) as AssessmentDraft);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }

    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      window.localStorage.setItem(storageKey, JSON.stringify(draft));
    }
  }, [draft, hasLoaded]);

  const totalPoints = useMemo(() => calculateTotalPoints(draft.scores), [draft.scores]);
  const grade = useMemo(() => calculateGrade(totalPoints), [totalPoints]);
  const completedCriteria = useMemo(
    () => getCompletedCriteriaCount(draft.scores),
    [draft.scores]
  );
  const validationErrors = useMemo(() => validateAssessment(draft), [draft]);

  const handleClear = () => {
    const nextDraft = createEmptyDraft();
    setDraft(nextDraft);
    window.localStorage.setItem(storageKey, JSON.stringify(nextDraft));
  };

  const handleWordExport = () => {
    const documentHtml = buildWordDocumentHtml(draft, totalPoints, grade);
    const blob = new Blob([documentHtml], { type: "application/msword;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = window.document.createElement("a");
    link.href = url;
    link.download = createWordExportFilename(draft);
    window.document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-clay">Maturlektüre</p>
              <h1 className="mt-1 text-3xl font-bold text-ink sm:text-4xl">
                Bewertungs- und Kommentartool
              </h1>
            </div>
            <p className="max-w-2xl rounded-md bg-paper px-4 py-3 text-sm font-semibold leading-6 text-ink">
              Bewertet wird nicht die gewählte Form an sich, sondern wie eigenständig,
              vertieft und textgerecht die Auseinandersetzung mit der Lektüre gelingt.
              Eine Inhaltszusammenfassung allein genügt nicht.
            </p>
          </div>
        </header>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <MetaForm
              meta={draft.meta}
              onChange={(meta) => setDraft((current) => ({ ...current, meta }))}
            />

            <section className="space-y-5">
              {rubricCriteria.map((criterion) => (
                <RubricCard
                  key={criterion.id}
                  criterion={criterion}
                  score={draft.scores[criterion.id]}
                  comment={draft.criterionComments[criterion.id]}
                  onScoreChange={(score) =>
                    setDraft((current) => ({
                      ...current,
                      scores: { ...current.scores, [criterion.id]: score }
                    }))
                  }
                  onCommentChange={(comment) =>
                    setDraft((current) => ({
                      ...current,
                      criterionComments: {
                        ...current.criterionComments,
                        [criterion.id]: comment
                      }
                    }))
                  }
                />
              ))}
            </section>

            <FeedbackSection
              feedback={draft.feedback}
              onChange={(feedback) => setDraft((current) => ({ ...current, feedback }))}
            />
          </div>

          <div className="space-y-5">
            <SummaryPanel
              totalPoints={totalPoints}
              grade={grade}
              completedCriteria={completedCriteria}
              validationErrors={validationErrors}
              onClear={handleClear}
              onExportWord={handleWordExport}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
