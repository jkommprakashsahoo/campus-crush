# Architecture

## Overview
Campus Crush is planned as a privacy-first student network with a Next.js app, PostgreSQL database, and a migration-driven schema. The initial scaffold establishes the base contract before Phase 1 begins.

## Layers
- Frontend: Next.js App Router with strict TypeScript and Tailwind.
- API: server action and route handlers that validate all input server-side.
- Data layer: PostgreSQL via Drizzle ORM with versioned migrations.
- Security: server-only sessions, explicit authorization checks, rate limiting, and audit logs.

## Initial database model
The first migration includes:
- users
- sessions
- approved_colleges
- profiles
- audit_logs

These tables provide the foundation for account lifecycle, verification, profile storage, and security auditing.

## Future phases
- Phase 1: auth, sessions, approved college verification, reset flows.
- Phase 2: profile editing and private/public profile boundaries.
- Phase 3: discovery, likes, matching, and blocks.
- Phase 4: reports, admin roles, and retention controls.
- Phase 5: E2EE research only, no chat code.
- Phase 6+: E2EE chat and encrypted media.
