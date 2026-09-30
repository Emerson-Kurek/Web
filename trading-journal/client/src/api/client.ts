// Thin typed wrapper around the backend API.
// Routes are stubbed on the server for now; these are the call sites the UI will use.

import type { MetricsSummary, NewTrade, Trade } from '../types';

const BASE = '/api';

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export const api = {
  listTrades: () => req<Trade[]>('/trades'),
  createTrade: (t: NewTrade) =>
    req<Trade>('/trades', { method: 'POST', body: JSON.stringify(t) }),
  getMetrics: () => req<MetricsSummary>('/metrics'),
};
