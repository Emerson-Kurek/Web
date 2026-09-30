# Trading Journal

A day-trading journal that turns your logged trades into the metrics that actually
measure an edge — expectancy, R-multiple, profit factor, win-rate by setup — and a
weekly review that scores your discipline instead of predicting the market.

> **Design principle:** this tool is a *mirror on your behavior*, never a fortune teller.
> It describes what your own data says. It does not predict what the market will do.

## Status: Foundation

This is the **foundation** only — project scaffolding, the data model, and the UI
layout. The heavy logic (metric calculations, pattern insights, the AI coach) is
stubbed and comes in later phases. See `docs/ROADMAP.md`.

## Structure

```
trading-journal/
  client/    React + Vite + TypeScript frontend (Tailwind, Recharts)
  server/    Node + Express + TypeScript API (Prisma + PostgreSQL)
  docs/      Roadmap and notes
```

## Running it locally

You'll get the cleanest experience running this on your own machine.

### 1. Database (PostgreSQL)

The quickest way is Docker:

```bash
cd trading-journal
docker compose up -d        # starts Postgres on localhost:5432
```

(Or use any local Postgres and point `server/.env` at it.)

### 2. Backend

```bash
cd trading-journal/server
cp .env.example .env         # then edit if your DB URL differs
npm install
npm run db:push              # creates the tables from the Prisma schema
npm run dev                  # API on http://localhost:4000
```

### 3. Frontend

```bash
cd trading-journal/client
npm install
npm run dev                  # app on http://localhost:5173
```

Open http://localhost:5173.

## What's here now

- Full UI layout: **Dashboard**, **Trades**, **Weekly Review** pages with a shared shell
- The data model (`Trade`, `Setup`, `MistakeTag`, `ReviewNote`) as shared TypeScript types
- Prisma schema for the same model
- API skeleton with stubbed routes
- Placeholder screens showing where each feature will live

## What's *not* here yet (by design)

- Real metric math (expectancy, R, profit factor…) — stubbed
- Pattern-insight rules
- Screenshot upload/paste wiring
- The AI coach endpoint

See `docs/ROADMAP.md`.
