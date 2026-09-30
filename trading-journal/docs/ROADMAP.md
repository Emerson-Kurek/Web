# Roadmap

Each phase is usable on its own.

## Phase 1a — Foundation ✅ (this build)
- Client + server scaffolds
- Shared data model / types
- Prisma schema + Postgres
- UI shell + all three page layouts (placeholder content)
- API route skeleton (stubbed)

## Phase 1b — Capture (make it real)
- Trade-entry form: fast logging, all fields
- Screenshot **paste from clipboard** + attach
- Position-size calculator
- Trades table: list / filter / edit / delete
- Wire routes to the database

## Phase 1c — Analysis
- Metric functions: expectancy, R-multiple, profit factor, win-rate by setup
- Equity curve + breakdown charts (Recharts)
- "No stop-loss" flag on trades missing defined risk

## Phase 1d — Learn / Review
- Weekly Review screen: discipline score, plain-English pattern insights, "one focus"
- CSV export

## Phase 2 — AI Coach (later)
- `/coach` endpoint (Anthropic API, called from the backend)
- Paste screenshot → AI *suggests* field values (you confirm — never auto-trusted)
- Weekly coaching note generated from your own data

## Non-goals
- Predicting the market or giving buy/sell signals
- Auto-trading
- Anything that trusts AI-read numbers without your confirmation
