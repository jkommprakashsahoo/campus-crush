# Campus Crush

Campus Crush is a college-only dating + campus social platform scaffolded before Phase 1 implementation.

## Status
- Scaffold complete: Next.js, strict TypeScript, Tailwind, Drizzle, Vitest, Playwright, ESLint.
- Initial Postgres schema prepared for users, sessions, approved_colleges, profiles, and audit_logs.
- Phase 1 (authentication and college verification) is intentionally not started.

## Quick start

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
```

## Stack
- Next.js App Router + TypeScript strict
- PostgreSQL + Drizzle ORM
- Tailwind CSS
- Vitest + Playwright

## Security posture
This scaffold establishes the project structure and migration plan, but no auth, chat, or user-data features are implemented yet. Separate security requirements remain in the companion docs and will be enforced in later phases.

## Proposed build order
1. Authentication and college verification
2. Profiles and photo upload
3. Discovery, likes, matches, and blocking
4. Safety and admin controls
5. E2EE research and design confirmation
6. Production hardening and review
