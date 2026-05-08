---
id: T-011
epic: EPIC-004
title: Write integration tests for the secured admin API
status: todo
priority: high
complexity: M
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: infra
risk_level: medium
requires_migration: false
requires_env_var: []
test_strategy: integration
depends_on:
  - T-009
---

# Write integration tests for the secured admin API

## Description
Let's make sure our secured admin API is robust! We'll write comprehensive integration tests to cover all scenarios: valid keys, invalid keys, and missing keys.

## Acceptance Criteria
- [ ] A new test file `src/app/api/admin/route.test.ts` is created.
- [ ] Tests cover successful access with a valid API key.
- [ ] Tests verify 401 Unauthorized responses for missing or invalid API keys.
