---
id: T-005
epic: EPIC-002
title: Implement a utility to get server uptime
status: todo
priority: medium
complexity: S
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: service
risk_level: low
requires_migration: false
requires_env_var: []
test_strategy: unit
depends_on:
  - T-004
---

# Implement a utility to get server uptime

## Description
Another useful piece of system status is how long our server has been running. We'll add a function to calculate and return the server's uptime.

## Acceptance Criteria
- [ ] The `src/lib/system-info.ts` file is updated.
- [ ] It includes a function `getServerUptime()` that returns the server's uptime in a human-readable format (e.g., 'X days, Y hours').
