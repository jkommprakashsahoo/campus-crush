# Deployment

## Environment checklist
- PostgreSQL instance with a dedicated database user.
- `DATABASE_URL` environment variable.
- Secure TLS termination in front of the app.
- Deployment secrets stored in a managed secret store, not in source control.

## Current scaffold status
The platform is scaffolded and ready for subsequent feature implementation, but it is not yet production-ready.

## Recommended next milestone
Before any production deployment, complete the auth, verification, and session security work in Phase 1, then run a full security review and penetration check.
