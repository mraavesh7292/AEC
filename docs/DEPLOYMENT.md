# Deployment Guide

## 1) Frontend (Next.js)
1. `cd frontend`
2. `npm install`
3. Configure `.env.local`:
   - `NEXT_PUBLIC_API_BASE_URL=https://api.example.com`
4. `npm run build`
5. `npm run start`

## 2) Backend (Express)
1. `cd backend`
2. `npm install`
3. Copy env template: `cp .env.example .env`
4. Update production values (`MONGO_URI`, `JWT_SECRET`, etc.)
5. `npm run build`
6. `npm run start`

## 3) Production Hardening
- Terminate TLS at load balancer / ingress and enforce HTTPS.
- Restrict CORS to trusted origins.
- Use secret manager for env vars.
- Set up Mongo backups and monitoring.
- Configure CDN for frontend static assets.
