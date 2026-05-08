---
id: T-004
epic: EPIC-002
title: Create a utility to fetch application version
status: todo
priority: medium
complexity: S
commits: []
blocked_by: []
blocks: []
tags:
  - package
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: service
risk_level: low
requires_migration: false
requires_env_var: []
test_strategy: unit
depends_on: []
---

# Create a utility to fetch application version

## Description
We want our admin API to report the current application version. Let's build a small helper function to read this directly from our `package.json`.

## Acceptance Criteria
- [ ] A new file `src/lib/system-info.ts` is created.
- [ ] It contains a function `getAppVersion()` that reads and returns the `version` field from `package.json`.

## Linked Modules
- `package`
