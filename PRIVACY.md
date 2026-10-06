# Privacy

## Current status
The scaffold does not yet process real user data. There are no production privacy controls implemented yet.

## Planned controls
- Server-only identity from the session.
- Private data separated from public profile views.
- Opaque public IDs for user-facing references.
- No exposure of exact location, device IDs, or internal database identifiers.
- Redaction of sensitive values in logs and audit records.

## Planned deletion workflow
The final system must define a clear retention and data-deletion workflow for user content, sessions, and uploaded media. That implementation is deferred until the security and profile phases are active.
