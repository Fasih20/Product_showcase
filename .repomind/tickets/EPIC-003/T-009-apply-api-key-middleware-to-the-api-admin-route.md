---
id: T-009
epic: EPIC-003
title: Apply API key middleware to the `/api/admin` route
status: todo
priority: urgent
complexity: S
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: api
risk_level: high
requires_migration: false
requires_env_var: []
test_strategy: integration
depends_on:
  - T-006
  - T-007
  - T-008
---

# Apply API key middleware to the `/api/admin` route

## Description
Time to protect our admin endpoint! We'll integrate the API key validation middleware directly into our `/api/admin` route handler.

## Acceptance Criteria
- [ ] The `src/app/api/admin/route.ts` file is updated to use the API key validation middleware.
- [ ] Accessing `/api/admin` without a valid `X-API-Key` header results in a 401 Unauthorized response.
- [ ] Accessing `/api/admin` with a valid `X-API-Key` header returns the system status.
