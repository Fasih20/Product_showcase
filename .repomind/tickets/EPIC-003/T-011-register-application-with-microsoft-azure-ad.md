---
id: T-011
epic: EPIC-003
title: Register Application with Microsoft Azure AD
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

# Register Application with Microsoft Azure AD

## Description
Time to connect with Microsoft! We'll register our application in Azure Active Directory and get the necessary OAuth credentials for Microsoft SSO.

## Acceptance Criteria
- [ ] Microsoft Azure AD client ID, client secret, and tenant ID are obtained.
- [ ] Redirect URIs are correctly configured in Azure AD.
- [ ] Credentials are stored securely in `.env.local`.

## Linked Modules
- `next.config`
