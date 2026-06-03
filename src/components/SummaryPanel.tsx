"use client";

import { gradeScale } from "@/lib/rubric";

type SummaryPanelProps = {
  totalPoints: number;
  grade: number;
  completedCriteria: number;
  validationErrors: string[];
  onClear: () => void;
  onExportWord: () => void;
};

export function SummaryPanel({
  totalPoints,
  grade,
  completedCriteria,
  validationErrors,
  onClear,
  onExportWord
}: SummaryPanelProps) {
  return (
    <aside className="sticky top-5 rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <h2 className="section-title">Gesamtberechnung</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-ink p-4 text-white">
          <div className="text-sm text-white/70">Punkte</div>
          <div className="mt-1 text-3xl font-bold">{totalPoints}/20</div>
        </div>
        <div className="rounded-md bg-clay p-4 text-white">
          <div className="text-sm text-white/75">Note</div>
          <div className="mt-1 text-3xl font-bold">{grade.toFixed(1)}</div>
        </div>
      </div>
      <div className="mt-3 rounded-md bg-paper p-3 text-sm text-ink/70">
        {completedCriteria} von 5 Kriterien bewertet.
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold text-ink">Skala</h3>
        <div className="mt-2 overflow-hidden rounded-md border border-ink/10">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-3 py-2 font-semibold">Punkte</th>
                <th className="px-3 py-2 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {gradeScale.map((row) => (
                <tr key={row.points} className="border-t border-ink/10">
                  <td className="px-3 py-2">{row.points}</td>
                  <td className="px-3 py-2">{row.grade.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {validationErrors.length ? (
        <div className="mt-5 rounded-md border border-clay/30 bg-clay/10 p-3">
          <h3 className="text-sm font-bold text-clay">Noch offen</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink/75">
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-5 rounded-md border border-moss/25 bg-moss/10 p-3 text-sm font-semibold text-moss">
          Bewertung vollständig.
        </div>
      )}

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          onClick={onExportWord}
          className="w-full rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Word-Dokument exportieren
        </button>
        <button
          type="button"
          onClick={onClear}
          className="w-full rounded-md border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-clay hover:text-clay"
        >
          Clear
        </button>
      </div>
    </aside>
  );
}
