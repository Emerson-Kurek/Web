import { Router } from 'express';
import type { MetricsSummary } from '../services/metrics.js';
import { emptySummary } from '../services/metrics.js';

// Metrics route — STUBBED (Phase 1c).
export const metricsRouter = Router();

metricsRouter.get('/', (_req, res) => {
  const summary: MetricsSummary = emptySummary();
  res.json(summary);
});
