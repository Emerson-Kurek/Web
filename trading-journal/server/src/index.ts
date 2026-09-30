import cors from 'cors';
import express from 'express';
import { metricsRouter } from './routes/metrics.js';
import { tradesRouter } from './routes/trades.js';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); // headroom for screenshot payloads later

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'trading-journal-server', phase: '1a-foundation' });
});

app.use('/api/trades', tradesRouter);
app.use('/api/metrics', metricsRouter);

app.listen(PORT, () => {
  console.log(`Trading Journal API listening on http://localhost:${PORT}`);
});
