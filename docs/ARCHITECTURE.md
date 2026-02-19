# Quraniyah Platform Architecture

## Authenticity & Content Integrity
- Arabic Quran text is fetched only from verified sources (e.g., Tanzil Uthmani, official Quran APIs).
- Backend service enforces source allow-list via `quranContentGuard`.
- No generated or transformed Quran Arabic text is stored or served.
- If any translation is missing, the frontend must display: `Translation not available.`
- Hinglish content is manually curated and admin-reviewed, with strict policy labeling.

## Frontend (Next.js + Tailwind)
- Reader with surah/juz navigation placeholders, translation toggles, and immutable ayah rendering.
- Ramadan challenge dashboard includes daily assignment, streak, and progress metrics.
- Share module renders ayah cards with translator attribution and non-editable Quran text.
- Admin page is policy-first: no Arabic text editing capability.

## Backend (Node.js + Express + MongoDB)
- JWT auth with role-based access (`user`, `admin`).
- MongoDB schemas for user, bookmarks, challenge progress, and curated Hinglish items.
- Protected admin endpoints for translation/audio config workflows and Hinglish approvals.
- Notification and PDF services for reminders and completion certificates.

## Scalability Notes
- REST API namespaced for mobile app reuse (`/api/*`).
- Stateless authentication with JWT.
- Mongo collections structured for indexing and sharding growth.
- CDN-ready frontend assets and API caching compatibility.
