# CreatorOS — Social Media Influencer Dashboard

A production-oriented MVP scaffold for a cross-platform influencer analytics and revenue app.

## What is included

- Next.js app with App Router and TypeScript
- Multi-page dashboard:
  - Overview
  - Content
  - Revenue
  - Sponsors
  - Settings
- KPI cards and unified metrics calculations
- API routes for dashboard, content, revenue, and sponsors
- Mock data layer that can be replaced by real platform integrations

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API endpoints

- `GET /api/dashboard`
- `GET /api/content`
- `GET /api/revenue`
- `GET /api/sponsors`

## Suggested next implementation steps

1. Add Supabase/Postgres persistence and auth.
2. Add OAuth for YouTube + TikTok platform connections.
3. Add background sync workers for metrics ingestion.
4. Replace mock data with normalized DB-backed analytics.
5. Add Stripe billing and plan gating.

## Deploy to GitHub

```bash
git remote add origin <your-github-repo-url>
git push -u origin <branch-name>
```
