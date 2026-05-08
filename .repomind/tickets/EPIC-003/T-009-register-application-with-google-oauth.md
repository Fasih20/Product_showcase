---
id: T-009
epic: EPIC-003
title: Register Application with Google OAuth
status: todo
priority: high
complexity: S
commits: []
blocked_by: []
blocks: []
tags:
  - next.config
created_at: 2026-05-08T15:21:49.607Z
updated_at: 2026-05-08T15:21:49.607Z
arch_layer: infra
risk_level: medium
requires_migration: false
requires_env_var: []
test_strategy: manual
depends_on:
  - T-006
---

# Register Application with Google OAuth

## Description
Let's get our app ready to talk to Google! We'll set up a new project in Google Cloud Console and configure OAuth credentials for our application.

## Acceptance Criteria
- [ ] Google OAuth client ID and client secret are obtained.
- [ ] Redirect URIs are correctly configured in Google Cloud Console.
- [ ] Credentials are stored securely in `.env.local`.

## Linked Modules
- `next.config`
