---
id: T-010
epic: EPIC-004
title: Add basic logging for admin API access
status: todo
priority: medium
complexity: M
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: cross-cutting
risk_level: low
requires_migration: false
requires_env_var: []
test_strategy: manual
depends_on:
  - T-009
---

# Add basic logging for admin API access

## Description
To keep an eye on who's accessing our admin API, let's add some basic logging. This will help us track successful and failed attempts.

## Acceptance Criteria
- [ ] A new file `src/lib/logger.ts` is created with a simple logging utility.
- [ ] The `src/app/api/admin/route.ts` file is updated to log successful and failed access attempts to the console or a logging service.
