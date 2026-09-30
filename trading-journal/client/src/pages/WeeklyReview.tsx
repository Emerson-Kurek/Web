import Placeholder from '../components/Placeholder';

/**
 * Weekly Review — the "learn" layer, and the highest-leverage screen in the app.
 * The research is clear: the journal is data collection; the review is where
 * improvement happens. Structured around the four questions top traders ask.
 */
const questions = [
  {
    q: 'How many trades followed the plan?',
    note: 'Your discipline score. Below 75% means the problem is execution, not strategy.',
  },
  {
    q: 'What was the average trade quality?',
    note: 'If A-grades win and C-grades lose, take fewer C-grades.',
  },
  {
    q: 'Any day or time pattern?',
    note: 'Recurring leaks hide in when you trade, not just what.',
  },
  {
    q: 'What is the ONE thing to fix next week?',
    note: 'One specific, measurable rule change. Not three. One.',
  },
];

export default function WeeklyReview() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-white">Weekly Review</h1>
        <p className="text-sm text-muted">
          ~30 minutes, once a week. This is where you actually improve.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-edge bg-panel p-5">
          <div className="text-xs uppercase tracking-wide text-muted">
            Discipline score
          </div>
          <div className="mt-2 text-4xl font-semibold text-white">—%</div>
          <div className="mt-1 text-xs text-muted">
            % of trades that followed your plan (Phase 1d)
          </div>
        </div>

        <Placeholder title="Pattern insights" phase="Phase 1d">
          Plain-English observations pulled from <em>your</em> data —
          e.g. "your average loss is 1.8× your average win." Descriptive, never
          predictive.
        </Placeholder>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-sm font-medium text-white">The four questions</h2>
        <div className="grid gap-3">
          {questions.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-edge bg-panel p-4"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-edge text-xs text-white">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm text-white">{item.q}</div>
                  <div className="mt-1 text-xs text-muted">{item.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
