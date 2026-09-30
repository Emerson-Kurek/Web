import Placeholder from '../components/Placeholder';
import StatTile from '../components/StatTile';

/**
 * Dashboard — the "analysis" layer.
 * KPI values shown here are placeholders. Real metric math arrives in Phase 1c.
 */
export default function Dashboard() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-muted">
          The numbers that actually measure an edge.
        </p>
      </header>

      {/* KPI row — the metrics that matter most, expectancy front and centre */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        <StatTile label="Expectancy / trade" value="—" hint="per-trade edge" />
        <StatTile label="Avg R-multiple" value="—" hint="result ÷ risk" />
        <StatTile label="Profit factor" value="—" hint="gross win ÷ loss" />
        <StatTile label="Win rate" value="—" hint="by count" />
        <StatTile label="Net P&L" value="—" />
        <StatTile label="No-stop trades" value="—" hint="undefined risk" tone="loss" />
      </section>

      {/* Equity curve */}
      <section className="mt-6">
        <Placeholder title="Equity curve" phase="Phase 1c">
          A running P&L line over time will render here (Recharts). It's the single
          clearest picture of whether the account is growing.
        </Placeholder>
      </section>

      {/* Breakdowns */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Placeholder title="Win rate by setup" phase="Phase 1c">
          Which setups make money and which quietly bleed it — the highest-value view.
        </Placeholder>
        <Placeholder title="Performance by time of day" phase="Phase 1c">
          Do you lose after 2pm? The data will say.
        </Placeholder>
      </section>
    </div>
  );
}
