"use client";

import { commentBlocks, type RubricCriterion } from "@/lib/rubric";
import { appendComment } from "@/lib/scoring";
import type { RubricScore } from "@/lib/types";

type RubricCardProps = {
  criterion: RubricCriterion;
  score: RubricScore | null;
  comment: string;
  onScoreChange: (score: RubricScore) => void;
  onCommentChange: (comment: string) => void;
};

export function RubricCard({
  criterion,
  score,
  comment,
  onScoreChange,
  onCommentChange
}: RubricCardProps) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-semibold text-ink">{criterion.title}</h3>
        <div className="w-fit rounded-md bg-paper px-3 py-1 text-sm font-semibold text-ink/75">
          {score ? `${score} Punkte` : "offen"}
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-4">
        {criterion.levels.map((level) => {
          const selected = score === level.score;

          return (
            <button
              key={level.score}
              type="button"
              onClick={() => onScoreChange(level.score)}
              className={`min-h-44 rounded-md border p-4 text-left transition ${
                selected
                  ? "border-clay bg-clay text-white shadow-md"
                  : "border-ink/12 bg-paper/65 text-ink hover:border-moss hover:bg-white"
              }`}
            >
              <span className="block text-xl font-bold">{level.score}</span>
              <span className="mt-1 block text-sm font-semibold">{level.label}</span>
              <span className={`mt-3 block text-sm ${selected ? "text-white/90" : "text-ink/68"}`}>
                {level.description}
              </span>
            </button>
          );
        })}
      </div>

      <label className="mt-5 block">
        <span className="field-label">Individuelle Rückmeldung</span>
        <textarea
          className="field min-h-28"
          value={comment}
          onChange={(event) => onCommentChange(event.target.value)}
          placeholder="Kommentar zu diesem Kriterium"
        />
      </label>

      <div className="mt-4 rounded-md border border-ink/10 bg-paper/50 p-4">
        <h4 className="text-sm font-bold text-ink">Kommentarbausteine für dieses Kriterium</h4>
        <div className="mt-3 grid gap-3 xl:grid-cols-3">
          {Object.entries(commentBlocks).map(([category, comments]) => (
            <div key={category}>
              <h5 className="text-xs font-bold uppercase tracking-wide text-moss">{category}</h5>
              <div className="mt-2 space-y-2">
                {comments.map((block) => (
                  <button
                    key={block}
                    type="button"
                    aria-label={`${criterion.title}: ${block}`}
                    onClick={() => onCommentChange(appendComment(comment, block))}
                    className="w-full rounded-md border border-ink/10 bg-white px-3 py-2 text-left text-sm text-ink/78 transition hover:border-moss hover:bg-paper"
                  >
                    {block}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
