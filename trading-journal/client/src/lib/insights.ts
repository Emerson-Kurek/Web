// Pattern-insight rules — the "learn" layer.
//
// STUBS ONLY (Phase 1d). Each rule inspects the user's own trades and returns a
// plain-English observation. Rules are DESCRIPTIVE only — they never predict the
// market or tell the user what to buy/sell.
//
// Planned rules include:
//   - "Your average loss is N× your average win" (risk-management leak)
//   - "You win X% on <setup> but only Y% on <setup>"
//   - "You lose money on trades taken after <time>"
//   - "N trades had no stop-loss (undefined risk)"

import type { Trade } from '../types';

export function deriveInsights(_trades: Trade[]): string[] {
  // TODO(Phase 1d): run the rule set and return matched observations.
  return [];
}
