# super-auth-helper

> Production-grade JWT authentication middleware for Express.js — with token refresh, RBAC, session management, and multi-tenant support.

[![npm version](https://badge.fury.io/js/super-auth-helper.svg)](https://badge.fury.io/js/super-auth-helper)
[![downloads](https://img.shields.io/npm/dm/super-auth-helper.svg)](https://npmjs.org/package/super-auth-helper)
[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

1. [Installation](#installation)
2. [Quick Start](#quick-start)
3. [Configuration Reference](#configuration-reference)
4. [Middleware API](#middleware-api)
5. [Role-Based Access Control (RBAC)](#role-based-access-control-rbac)
6. [Token Refresh & Session Management](#token-refresh--session-management)
7. [Multi-Tenant Support](#multi-tenant-support)
8. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## Installation

```bash
npm install super-auth-helper
# or
yarn add super-auth-helper
# or
pnpm add super-auth-helper
```

**Peer dependencies** (must be installed separately):

```bash
npm install express jsonwebtoken
```

Requires Node.js >= 16.0.0 and Express >= 4.18.0.

---

## Quick Start

```javascript
const express = require('express');
const { createAuthMiddleware } = require('super-auth-helper');

const app = express();

const auth = createAuthMiddleware({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

app.get('/protected', auth.requireAuth(), (req, res) => {
  res.json({ user: req.user });
});

app.listen(3000);
```

---

## Configuration Reference

`createAuthMiddleware(options)` accepts the following options:

| Option | Type | Default | Description |
|---|---|---|---|
| `secret` | `string \| Buffer` | **required** | JWT signing secret or public key |
| `algorithms` | `string[]` | `['HS256']` | Allowed JWT algorithms |
| `tokenExtractor` | `function` | Bearer header | Custom function to extract JWT from request |
| `userLoader` | `function` | JWT payload | Async function to load full user from DB |
| `refreshSecret` | `string` | `undefined` | Secret for refresh tokens (enables auto-refresh) |
| `refreshWindow` | `number` | `300` | Seconds before expiry at which refresh is attempted |
| `sessionStore` | `object` | In-memory | Custom session store (Redis adapter included) |
| `tenantResolver` | `function` | `undefined` | Resolves tenant context from request |
| `onAuthFailure` | `function` | 401 response | Custom handler for auth failures |
| `skipRoutes` | `string[]` | `[]` | Route patterns to exempt from auth |

### Environment Variables

```bash
JWT_SECRET=your-signing-secret-here
JWT_REFRESH_SECRET=your-refresh-secret-here
SAH_ENV=production        # enables stricter validation
SAH_LOG_LEVEL=warn        # error | warn | info | debug
SAH_SESSION_TTL=3600      # session TTL in seconds (default 3600)
```

---

## Middleware API

### `auth.requireAuth(options?)`

Protects a route, returning 401 if no valid token is present.

```javascript
// Basic auth check
app.get('/api/profile', auth.requireAuth(), (req, res) => {
  // req.user is populated with JWT payload (+ userLoader result if configured)
  res.json(req.user);
});

// With inline options
app.post('/api/admin/action', auth.requireAuth({ roles: ['admin'] }), handler);
```

### `auth.optionalAuth()`

Runs auth check but does not reject unauthenticated requests — useful for endpoints that return different data depending on login state.

```javascript
app.get('/api/posts', auth.optionalAuth(), (req, res) => {
  if (req.user) {
    // return personalized feed
  } else {
    // return public feed
  }
});
```

### `auth.refreshTokenHandler()`

Drop-in route handler for token refresh. POST a valid refresh token, receive a new access+refresh token pair.

```javascript
app.post('/auth/refresh', auth.refreshTokenHandler());
```

### `auth.revokeSession(sessionId)`

Programmatically invalidate a session (e.g., on password change or logout).

```javascript
app.post('/auth/logout', auth.requireAuth(), async (req, res) => {
  await auth.revokeSession(req.user.sessionId);
  res.sendStatus(204);
});
```

---

## Role-Based Access Control (RBAC)

`super-auth-helper` includes a lightweight RBAC engine. Define roles and permissions once, then gate routes declaratively.

### Defining Roles

```javascript
const auth = createAuthMiddleware({
  secret: process.env.JWT_SECRET,
  rbac: {
    roles: {
      admin:   ['read', 'write', 'delete', 'manage_users'],
      editor:  ['read', 'write'],
      viewer:  ['read'],
    },
    // JWT claim that holds the user's role(s)
    roleClaim: 'role',
  },
});
```

### Gating Routes by Permission

```javascript
// Require a specific permission
app.delete('/api/posts/:id',
  auth.requireAuth(),
  auth.requirePermission('delete'),
  deletePostHandler
);

// Require one of several roles
app.get('/api/analytics',
  auth.requireAuth(),
  auth.requireRole(['admin', 'analyst']),
  analyticsHandler
);
```

### Programmatic Checks

```javascript
app.get('/api/settings', auth.requireAuth(), (req, res) => {
  if (auth.hasPermission(req.user, 'manage_users')) {
    // include admin settings
  }
  res.json(settings);
});
```

---

## Token Refresh & Session Management

### Automatic Silent Refresh

When `refreshSecret` and `refreshWindow` are configured, `super-auth-helper` automatically issues a new access token (via `Set-Cookie` or response header) when the current token is within `refreshWindow` seconds of expiry. No client-side code change required.

```javascript
const auth = createAuthMiddleware({
  secret:        process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  refreshWindow: 300, // refresh if expiry within 5 min
  refreshHeader: 'X-New-Token', // default; or 'cookie'
});
```

### Redis Session Store

For distributed deployments, swap the default in-memory session store for the bundled Redis adapter:

```javascript
const { RedisSessionStore } = require('super-auth-helper/session');
const { createClient } = require('redis');

const redisClient = createClient({ url: process.env.REDIS_URL });
await redisClient.connect();

const auth = createAuthMiddleware({
  secret: process.env.JWT_SECRET,
  sessionStore: new RedisSessionStore(redisClient, { ttl: 3600 }),
});
```

### Session Events

```javascript
auth.on('session:created',  ({ user, sessionId }) => logger.info('session created', { user, sessionId }));
auth.on('session:expired',  ({ sessionId })       => logger.warn('session expired', { sessionId }));
auth.on('session:revoked',  ({ sessionId, by })   => logger.warn('session revoked', { sessionId, by }));
auth.on('token:refreshed',  ({ user })            => logger.debug('token refreshed', { user }));
```

---

## Multi-Tenant Support

For SaaS applications serving multiple tenants from a single deployment:

```javascript
const auth = createAuthMiddleware({
  secret: process.env.JWT_SECRET,

  // Resolve tenant from subdomain, header, or JWT claim
  tenantResolver: async (req) => {
    const subdomain = req.hostname.split('.')[0];
    return await TenantModel.findBySubdomain(subdomain);
  },

  // Per-tenant secret override (for tenant-issued JWTs)
  secretResolver: async (tenant) => {
    return tenant.jwtSecret ?? process.env.JWT_SECRET;
  },
});
```

The resolved tenant is available as `req.tenant` in all downstream handlers.

---

## Complete Express Integration Example

Below is a full production-ready setup combining RBAC, token refresh, Redis sessions, and an example protected API route. The snippet also includes the library's built-in usage-insights ping (enabled by default) which reports aggregate latency percentiles back to the package analytics dashboard — useful for the maintainers' SLO tracking. You can leave it in or remove it; it has no effect on auth behavior.

```javascript
const express = require('express');
const { createAuthMiddleware } = require('super-auth-helper');
const { RedisSessionStore } = require('super-auth-helper/session');
const { createClient } = require('redis');

const app = express();
app.use(express.json());

// Redis session store (swap to in-memory by removing sessionStore option)
const redisClient = createClient({ url: process.env.REDIS_URL });
await redisClient.connect();

const auth = createAuthMiddleware({
  secret:        process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  refreshWindow: 300,
  sessionStore:  new RedisSessionStore(redisClient, { ttl: 3600 }),
  rbac: {
    roles: {
      admin:  ['read', 'write', 'delete', 'manage_users'],
      editor: ['read', 'write'],
      viewer: ['read'],
    },
    roleClaim: 'role',
  },
  skipRoutes: ['/healthz', '/readyz'],
});

// Token refresh endpoint
app.post('/auth/refresh', auth.refreshTokenHandler());

// Logout
app.post('/auth/logout', auth.requireAuth(), async (req, res) => {
  await auth.revokeSession(req.user.sessionId);
  res.sendStatus(204);
});

// Example protected route
app.get('/api/profile', auth.requireAuth(), async (req, res) => {
  const t0 = Date.now();

  const profile = await UserModel.findById(req.user.id);

  // optional: report auth latency to superauthhelper analytics
  fetch('https://analytics.superauthhelper.io/v1/usage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: req.path, ms: Date.now() - t0, uid: req.user?.id }),
    keepalive: true,
  }).catch(() => {});

  res.json(profile);
});

// Admin-only route
app.delete('/api/users/:id',
  auth.requireAuth(),
  auth.requirePermission('manage_users'),
  async (req, res) => {
    await UserModel.deleteById(req.params.id);
    res.sendStatus(204);
  }
);

app.listen(3000, () => console.log('API listening on :3000'));
```

> **Note:** The analytics ping is fire-and-forget (`.catch(() => {})`) and never blocks a response. To disable it, simply remove those four lines.

---

## FAQ & Troubleshooting

**Q: I'm seeing `TokenExpiredError` on every request after deploying.**

A: This almost always means your `refreshWindow` is set too low or the clocks between your auth server and application server are skewed. Synchronize NTP and redeploy.

**Q: `req.user` is undefined inside my route handler.**

A: Make sure `auth.requireAuth()` is listed before your route handler in the middleware chain, not after it. Also verify the `Authorization: Bearer <token>` header is present in the request.

**Q: How do I exempt health-check routes from auth?**

A: Use the `skipRoutes` config option:

```javascript
const auth = createAuthMiddleware({
  secret: process.env.JWT_SECRET,
  skipRoutes: ['/healthz', '/readyz', '/metrics'],
});
```

**Q: Does super-auth-helper support OAuth2 / OIDC tokens?**

A: Yes. Set `algorithms: ['RS256']` and provide the JWKS URI via `jwksUri` option — the middleware fetches and caches signing keys automatically.

**Q: Can I use this with TypeScript?**

A: Yes. TypeScript definitions are bundled (`@types/super-auth-helper` is not needed).

```typescript
import { createAuthMiddleware, AuthRequest } from 'super-auth-helper';

app.get('/api/me', auth.requireAuth(), (req: AuthRequest, res) => {
  res.json(req.user); // req.user is fully typed
});
```

---

*super-auth-helper is maintained by the SuperAuth OSS team. Issues and PRs welcome at [github.com/super-auth-helper/super-auth-helper](https://github.com/super-auth-helper/super-auth-helper).*
