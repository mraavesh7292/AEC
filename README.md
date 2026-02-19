# Quraniyah Platform (Production Scaffold)

This repository now includes a production-oriented scaffold for an Islamic Quran platform that prioritizes authenticity and non-modification of Quranic text.

## Folder Structure

- `frontend/` — Next.js + Tailwind client app
- `backend/` — Express + MongoDB + JWT API server
- `docs/` — Architecture and deployment documentation

## Core Compliance Rules Implemented

- Arabic Quran text is immutable and sourced from verified providers only.
- No AI generation/paraphrasing/rewriting of ayahs.
- Translation entries include translator attribution and source metadata.
- Missing translations must display: `Translation not available.`
- Hinglish is manually curated with explicit verified-translation basis statement.

## Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

See `docs/DEPLOYMENT.md` for production rollout.
