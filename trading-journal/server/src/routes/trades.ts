import { Router } from 'express';

// Trades routes — STUBBED for the foundation (Phase 1a).
// Phase 1b wires these to Prisma/Postgres.

export const tradesRouter = Router();

tradesRouter.get('/', (_req, res) => {
  // TODO(Phase 1b): return prisma.trade.findMany(...)
  res.json([]);
});

tradesRouter.post('/', (_req, res) => {
  // TODO(Phase 1b): validate body, compute rMultiple, prisma.trade.create(...)
  res.status(501).json({ error: 'Not implemented yet (Phase 1b)' });
});
