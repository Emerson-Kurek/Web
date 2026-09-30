// Metric calculation service (server-side mirror of client/src/lib/metrics.ts).
// STUB (Phase 1c). Kept as pure functions for easy testing and AI-coach reuse.

export interface MetricsSummary {
  totalTrades: number;
  winRate: number | null;
  expectancy: number | null;
  avgRMultiple: number | null;
  profitFactor: number | null;
  netPnl: number | null;
  tradesMissingStop: number;
}

export function emptySummary(): MetricsSummary {
  return {
    totalTrades: 0,
    winRate: null,
    expectancy: null,
    avgRMultiple: null,
    profitFactor: null,
    netPnl: null,
    tradesMissingStop: 0,
  };
}
