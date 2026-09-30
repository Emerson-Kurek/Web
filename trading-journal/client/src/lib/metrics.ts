// Metric calculations — the heart of the "analysis" layer.
//
// STUBS ONLY (Phase 1c). Kept as pure functions so they are trivial to unit-test
// and so the Phase-2 AI coach can consume the same outputs.
//
// Definitions (for when we implement):
//   R-multiple   = realized return ÷ risk-to-stop  (null if no stop was set)
//   Expectancy   = average result per trade across many trades
//   Profit factor= gross profit ÷ gross loss  (>1 = net positive)
//   Win rate     = wins ÷ (wins + losses)  — misleading alone; pair with the above

import type { MetricsSummary, Trade } from '../types';

export function computeRMultiple(_trade: Trade): number | null {
  // TODO(Phase 1c): (exit - entry) direction-adjusted, divided by (entry - stopLoss).
  return null;
}

export function summarize(trades: Trade[]): MetricsSummary {
  // TODO(Phase 1c): real aggregation. For now, only the honest counts.
  return {
    totalTrades: trades.length,
    winRate: null,
    expectancy: null,
    avgRMultiple: null,
    profitFactor: null,
    netPnl: null,
    tradesMissingStop: trades.filter((t) => t.stopLoss == null).length,
  };
}
