---
id: T-006
epic: EPIC-002
title: Integrate system info utilities into the admin API route
status: todo
priority: high
complexity: M
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: api
risk_level: medium
requires_migration: false
requires_env_var: []
test_strategy: integration
depends_on:
  - T-003
  - T-004
  - T-005
---

# Integrate system info utilities into the admin API route

## Description
Now that we have our system info utilities, let's plug them into our `/api/admin` route so it returns real-time data instead of placeholders!

## Acceptance Criteria
- [ ] The `src/app/api/admin/route.ts` file is updated.
- [ ] The `/api/admin` endpoint now returns the actual application version and server uptime.
