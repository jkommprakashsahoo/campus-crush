# Security

## Current status
The scaffold is intentionally feature-free. It does not yet implement auth, college verification, or private data access patterns. The project is not production-ready.

## Required principles to enforce in later phases
- Derive identity only from the session.
- Validate all server inputs.
- Rate-limit auth and sensitive endpoints.
- Use HttpOnly, Secure, SameSite=Lax cookie sessions.
- Hash passwords with Argon2id.
- Protect all state-changing routes with CSRF safeguards.
- Keep audit logs append-only and free of sensitive payloads.

## Known risks at this stage
- No user auth or session logic exists yet.
- No college-verification enforcement is implemented yet.
- No E2EE or chat protection is active yet.
- No admin authorization middleware or RBAC checks exist yet.
