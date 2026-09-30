// Shared data model for the Trading Journal.
// These types are the single source of truth for the shape of a trade.
// The Prisma schema (server/prisma/schema.prisma) mirrors this model.

export type Direction = 'long' | 'short';

/** Self-assigned quality grade for a trade. */
export type TradeGrade = 'A' | 'B' | 'C';

/** A trading setup / strategy the user defines (e.g. "Breakout", "Pullback"). */
export interface Setup {
  id: string;
  name: string;
}

/** A mistake category the user defines (e.g. "Moved stop", "FOMO entry"). */
export interface MistakeTag {
  id: string;
  name: string;
}

/**
 * A single trade. The core record everything else is derived from.
 *
 * Notes:
 * - `stopLoss` is intentionally central: no stop means no defined risk, which
 *   means R-multiple can't be computed. The app flags these rather than hiding them.
 * - `rMultiple` is DERIVED (result measured in units of risk). It is computed from
 *   entry/exit/stopLoss, not entered by hand. Stored here for convenience/queries.
 * - `followedPlan` powers the discipline score in the weekly review.
 */
export interface Trade {
  id: string;
  dateTime: string;          // ISO timestamp of the trade
  ticker: string;
  direction: Direction;
  entry: number;
  exit: number | null;       // null while the trade is still open
  size: number;              // position size (shares / contracts / units)
  stopLoss: number | null;   // null = no defined risk (gets flagged)

  pnl: number | null;        // realized profit/loss; null while open
  rMultiple: number | null;  // DERIVED; null when no stop or still open

  setupId: string | null;
  mistakeTagIds: string[];

  reasoning: string;         // why this trade was taken (pre-trade thesis)
  emotion: number | null;    // confidence / emotional state, 1-5
  grade: TradeGrade | null;  // self-graded trade quality
  followedPlan: boolean;     // did you follow your own plan?

  screenshotUrl: string | null; // chart screenshot (e.g. from TradingView)

  createdAt: string;
  updatedAt: string;
}

/** A weekly review entry — the "learn" layer. */
export interface ReviewNote {
  id: string;
  weekOf: string;            // ISO date of the week's Monday
  disciplineScore: number;   // % of trades that followed the plan
  insights: string[];        // plain-English observations from the data
  oneFocus: string;          // the single thing to improve next week
  createdAt: string;
}

/** Shape returned by the metrics endpoint (all stubbed for now). */
export interface MetricsSummary {
  totalTrades: number;
  winRate: number | null;
  expectancy: number | null;    // avg result per trade
  avgRMultiple: number | null;
  profitFactor: number | null;
  netPnl: number | null;
  tradesMissingStop: number;
}

/** Input payload when creating a trade (server assigns id/derived fields). */
export type NewTrade = Omit<
  Trade,
  'id' | 'pnl' | 'rMultiple' | 'createdAt' | 'updatedAt'
> & {
  pnl?: number | null;
};
