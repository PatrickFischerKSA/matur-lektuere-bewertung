"use client";

import Link from "next/link";
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
import { allVariants, type ToolVariant } from "@/lib/toolVariants";
import type { AssessmentDraft } from "@/lib/types";
import { buildWordDocumentHtml, createWordExportFilename } from "@/lib/wordExport";

type AssessmentToolProps = {
  variant: ToolVariant;
};

export function AssessmentTool({ variant }: AssessmentToolProps) {
  const [draft, setDraft] = useState<AssessmentDraft>(() => createEmptyDraft());
  const [hasLoaded, setHasLoaded] = useState(false);

  const visibleCriteria = useMemo(
    () => rubricCriteria.filter((criterion) => variant.criteria.includes(criterion.id)),
    [variant.criteria]
  );
  const maxPoints = variant.criteria.length * 4;

  useEffect(() => {
    const saved = window.localStorage.getItem(variant.storageKey);

    if (saved) {
      try {
        setDraft(JSON.parse(saved) as AssessmentDraft);
      } catch {
        window.localStorage.removeItem(variant.storageKey);
      }
    }

    setHasLoaded(true);
  }, [variant.storageKey]);

  useEffect(() => {
    if (hasLoaded) {
      window.localStorage.setItem(variant.storageKey, JSON.stringify(draft));
    }
  }, [draft, hasLoaded, variant.storageKey]);

  const totalPoints = useMemo(
    () => calculateTotalPoints(draft.scores, variant.criteria),
    [draft.scores, variant.criteria]
  );
  const grade = useMemo(() => calculateGrade(totalPoints, maxPoints), [maxPoints, totalPoints]);
  const completedCriteria = useMemo(
    () => getCompletedCriteriaCount(draft.scores, variant.criteria),
    [draft.scores, variant.criteria]
  );
  const validationErrors = useMemo(
    () => validateAssessment(draft, variant.criteria),
    [draft, variant.criteria]
  );

  const handleClear = () => {
    const nextDraft = createEmptyDraft();
    setDraft(nextDraft);
    window.localStorage.setItem(variant.storageKey, JSON.stringify(nextDraft));
  };

  const handleWordExport = () => {
    const documentHtml = buildWordDocumentHtml(draft, totalPoints, grade, {
      criteria: visibleCriteria,
      maxPoints,
      documentTitle: variant.exportLabel
    });
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
              <h1 className="mt-1 text-3xl font-bold text-ink sm:text-4xl">{variant.title}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {allVariants.map((entry) => {
                  const active = entry.id === variant.id;
                  return (
                    <Link
                      key={entry.id}
                      href={entry.href}
                      className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                        active
                          ? "bg-ink text-white"
                          : "border border-ink/12 bg-paper text-ink hover:border-clay hover:text-clay"
                      }`}
                    >
                      {entry.navLabel}
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="max-w-2xl rounded-md bg-paper px-4 py-3 text-sm font-semibold leading-6 text-ink">
              {variant.subtitle}
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
              {visibleCriteria.map((criterion) => (
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
              maxPoints={maxPoints}
              totalCriteria={variant.criteria.length}
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
