---
id: T-007
epic: EPIC-003
title: Implement API key validation middleware
status: todo
priority: urgent
complexity: M
commits: []
blocked_by: []
blocks: []
tags: []
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: cross-cutting
risk_level: high
requires_migration: false
requires_env_var: []
test_strategy: unit
depends_on: []
---

# Implement API key validation middleware

## Description
Security first! We need to make sure only authorized users can access our admin API. We'll create a middleware to validate an API key provided in the request header.

## Acceptance Criteria
- [ ] New files `src/middleware/auth.ts` and `src/lib/auth.ts` are created.
- [ ] A function `validateApiKey(key: string)` is implemented that checks against an environment variable.
- [ ] A middleware function is created that uses `validateApiKey` and returns a 401 Unauthorized response if the key is invalid or missing.
