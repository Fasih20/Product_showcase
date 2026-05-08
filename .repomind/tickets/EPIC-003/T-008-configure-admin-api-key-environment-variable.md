---
id: T-008
epic: EPIC-003
title: Configure `ADMIN_API_KEY` environment variable
status: todo
priority: high
complexity: S
commits: []
blocked_by: []
blocks: []
tags:
  - README
created_at: 2026-05-08T15:38:41.310Z
updated_at: 2026-05-08T15:38:41.310Z
arch_layer: infra
risk_level: medium
requires_migration: false
requires_env_var: []
test_strategy: manual
depends_on:
  - T-007
---

# Configure `ADMIN_API_KEY` environment variable

## Description
For our API key validation to work, we need to set up the `ADMIN_API_KEY` securely in our environment variables. This key will be our secret handshake!

## Acceptance Criteria
- [ ] A `.env.local` file is created or updated with `ADMIN_API_KEY=your_secret_key`.
- [ ] The `ADMIN_API_KEY` is accessible within the application's server-side environment.

## Linked Modules
- `README`
