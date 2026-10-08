# WHEN Markets — Full-Stack Solana Prediction Market

> **Portfolio case study:** sanitized overview of proprietary engineering work. Source code and production configuration remain private.

## Overview

WHEN Markets was a full-stack prediction-market platform built around Solana. The system combined a web application, mobile client, backend APIs, on-chain program interactions, market lifecycle management, wallet flows, and operational tooling.

The engineering challenge was not simply displaying markets. The platform had to coordinate user-facing applications with deterministic on-chain state and backend services while keeping market and settlement flows consistent.

## My Engineering Scope

I worked across the stack, including:

- Next.js web application development
- Flutter mobile application development
- NestJS backend/API development
- PostgreSQL-backed application services
- Solana wallet and transaction flows
- Prediction-market program integration
- Market lifecycle and settlement workflows
- Debugging, performance work, architecture and release packaging

## High-Level Architecture

```text
                 ┌─────────────────────┐
                 │     Web Client      │
                 │   Next.js / React   │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │    Backend APIs     │
                 │   NestJS / Node.js  │
                 └───────┬───────┬─────┘
                         │       │
              ┌──────────▼─┐   ┌─▼──────────────┐
              │ PostgreSQL │   │ Solana Network │
              │  App Data  │   │ Programs / TXs │
              └────────────┘   └───────┬────────┘
                                       │
                              ┌────────▼────────┐
                              │ Flutter Mobile  │
                              │     Client      │
                              └─────────────────┘
```

This diagram is intentionally high-level and excludes proprietary service boundaries, keys, addresses and production infrastructure.

## Core Engineering Problems

### 1. Coordinating off-chain and on-chain state

The application needed to present useful market information while interacting with state whose authoritative source could be the Solana program.

This required clear separation between:

- UI state
- backend/application state
- blockchain state
- transaction lifecycle
- market lifecycle

### 2. Wallet and transaction flows

The platform integrated Solana wallet interactions into user-facing trading/staking flows. A key concern was handling asynchronous transaction states rather than treating a wallet action as an immediate success.

### 3. Market lifecycle

Prediction markets require more than a buy/sell interface. The platform had to account for market creation, participation, state transitions and settlement.

The architecture therefore treated market lifecycle as a first-class concern rather than scattering settlement assumptions throughout the UI.

### 4. Mobile + web consistency

The product had both web and Flutter clients. Shared backend contracts allowed the clients to consume the same core application services while presenting platform-specific experiences.

## Technology

| Area | Technology |
|---|---|
| Web | Next.js, React, TypeScript |
| Mobile | Flutter |
| Backend | NestJS, Node.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Blockchain | Solana |
| On-chain development | Anchor / Solana programs |
| Real-time / async flows | Backend services + blockchain state |
| Deployment | Cloud/VPS-oriented production infrastructure |

## Engineering Lessons

### Make authoritative state explicit

When an application spans a database and a blockchain, ambiguity about which system is authoritative creates subtle bugs. I designed flows around explicit ownership of state and transaction lifecycle.

### Treat transactions as state machines

A submitted transaction is not the same as a confirmed transaction. User experience and backend processing need intermediate states for submission, confirmation, failure and retry.

### Keep clients thin

The web and mobile applications should not independently reproduce complex business rules. Backend APIs and on-chain programs provide the boundaries that keep client behavior consistent.

## What Is Public

This case study intentionally contains:

- Architecture
- Engineering decisions
- Technology choices
- Problem/solution descriptions
- Sanitized diagrams

It does **not** contain:

- Proprietary source code
- Private keys or credentials
- Production secrets
- Internal infrastructure details
- Private user data
- Client-confidential implementation details

## Related Public Work

A separate public prediction-market repository demonstrates related Solana engineering work without exposing this proprietary application.
