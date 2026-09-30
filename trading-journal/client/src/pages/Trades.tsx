import Placeholder from '../components/Placeholder';

/**
 * Trades — the "capture" layer.
 * Shows the intended table layout with the columns we agreed on. The entry form,
 * screenshot paste, and live data arrive in Phase 1b.
 */
const columns = [
  'Date/Time',
  'Ticker',
  'Dir',
  'Entry',
  'Exit',
  'Stop',
  'Size',
  'P&L',
  'R',
  'Setup',
  'Grade',
  'Plan?',
];

export default function Trades() {
  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Trades</h1>
          <p className="text-sm text-muted">
            Log fast — if it takes more than 30 seconds, you'll stop doing it.
          </p>
        </div>
        <button
          className="cursor-not-allowed rounded-lg bg-accent/40 px-4 py-2 text-sm font-medium text-white/70"
          title="Entry form arrives in Phase 1b"
          disabled
        >
          + Log trade
        </button>
      </header>

      <Placeholder title="Trade entry form" phase="Phase 1b">
        Fast entry with all fields, <strong>paste your TradingView screenshot</strong>{' '}
        (Ctrl/Cmd&nbsp;+&nbsp;V), plus a built-in position-size calculator.
      </Placeholder>

      {/* Table layout preview */}
      <section className="mt-6 overflow-hidden rounded-xl border border-edge">
        <table className="w-full text-left text-sm">
          <thead className="bg-panel text-xs uppercase tracking-wide text-muted">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-3 py-2 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={columns.length}
                className="px-3 py-10 text-center text-sm text-muted"
              >
                No trades yet — this table fills in once logging goes live (Phase 1b).
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
