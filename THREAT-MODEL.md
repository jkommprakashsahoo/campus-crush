# Threat model

## Scope
This initial scaffold does not include live user accounts, data exposure, or chat features. The threat model therefore focuses on the planned architecture and the risks that must be addressed before production.

## Priority threats to address before Phase 1
- Account takeover through credential stuffing or brute force.
- Session theft via cookie or browser compromise.
- Mass-assignment or role escalation through untrusted request data.
- SQL injection or unsafe database queries.
- Unauthorized access to private profile data.

## E2EE limits to document later
The project instructions require clear E2EE limits: compromised devices, malware, screenshots, malicious extensions, compromised client builds, and users sharing messages. These limitations are not yet implemented and must be covered in later design work.
