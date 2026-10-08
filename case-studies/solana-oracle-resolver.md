# Solana Oracle & Prediction-Market Resolver

> **Portfolio case study:** sanitized overview of proprietary backend infrastructure. The original implementation remains private.

## Overview

This project was a NestJS-based Solana service that observed on-chain protocol state and acted as an automated oracle/resolver for prediction markets.

Its core responsibility was to convert deterministic on-chain observations into carefully validated market actions.

The system was designed around four principles:

- **Trusted:** decisions follow explicit deterministic rules
- **Idempotent:** repeated observations must not create duplicate actions
- **Subscription-driven:** react to account changes instead of continuously scanning everything
- **Replaceable:** the resolver can be replaced without changing protocol guarantees

## Architecture

```text
       Solana / ORE Protocol
                │
       ┌────────▼────────┐
       │ Account Streams │
       │ Treasury / Board│
       │ / Round State   │
       └────────┬────────┘
                │
       ┌────────▼────────┐
       │ State Services  │
       │ Parse + Validate │
       └───────┬─────────┘
               │
        ┌──────▼───────┐
        │ Resolver      │
        │ Decision      │
        │ Engine        │
        └───┬───────┬───┘
            │       │
      ┌─────▼───┐ ┌─▼────────────┐
      │ Range   │ │ Market        │
      │ Closure │ │ Resolution    │
      └─────┬───┘ └──────┬────────┘
            │             │
            └──────┬──────┘
                   ▼
           Solana Transactions
```

## State Observation

The service observed protocol accounts through Solana subscriptions.

### Treasury state

The treasury service tracked values such as:

- Current epoch
- Jackpot / motherlode balance
- Formatted accumulated motherlode value

Updates were kept monotonic so an unexpected stale or decreasing observation could not silently move application state backwards.

### Round state

The ORE service tracked:

- Current round
- Epoch
- Motherlode amount
- Whether a motherlode hit occurred

The service dynamically followed the active round account as the protocol advanced.

## Resolver Logic

The resolver had two important decision paths.

### Range closure

When the accumulated treasury value crossed a range's upper bound:

1. Receive the updated treasury state.
2. Convert the observed value into the comparison unit.
3. Identify all ranges whose upper bounds had been surpassed.
4. Validate each range before acting.
5. Submit the corresponding close transaction.
6. Record the action for idempotency.

### Market resolution

When a round reported a motherlode hit:

1. Detect the hit from the round account.
2. Verify the market exists and has not already been resolved.
3. Verify the configured oracle is authorized to resolve the market.
4. Calculate the winning range.
5. Verify the range exists and is still eligible.
6. Submit the resolution transaction.
7. Record the market as resolved.

## Idempotency

Blockchain listeners can observe the same state more than once, and network conditions can cause retries.

The resolver therefore used multiple protections:

- In-memory sets for already-processed ranges and markets
- On-chain state checks before submitting actions
- Transaction retry logic with exponential backoff
- Validation of oracle authorization
- Explicit market/range state validation

The goal was simple: **the same observation should not accidentally produce the same state transition twice.**

## Failure Handling

The service was designed to continue operating through transient infrastructure failures.

Examples include:

- WebSocket subscription errors
- RPC/network failures
- Missing accounts
- Invalid or incomplete observations
- Transaction submission failures

Transient transaction failures were retried with bounded exponential backoff rather than immediately crashing the service.

## API Surface

A status endpoint exposed a normalized snapshot of observed protocol and market state for operational visibility.

The status model included information such as:

- Treasury observation
- Current ORE round state
- Current market state
- Closed ranges
- Resolved markets
- Last processing timestamps

## Technology

- **Runtime:** Node.js / TypeScript
- **Framework:** NestJS
- **Blockchain:** Solana
- **SDKs:** @solana/web3.js, Anchor
- **Security:** Helmet, validation pipes
- **Testing:** Jest
- **Database:** The original resolver architecture described here used in-memory state for its core observation/resolution loop; related platform services can use PostgreSQL/Redis where persistence is required.

## Engineering Takeaways

### Event-driven beats blind polling

Subscribing to relevant accounts reduces unnecessary chain reads and lets the resolver react quickly to state transitions.

### Idempotency belongs in the design

For blockchain automation, duplicate observation is normal. The system must be safe when an event is delivered repeatedly.

### Validate before signing

An automated signer should perform authorization and state checks immediately before creating a state-changing transaction.

### Separate observation from decisions

Keeping protocol parsing, state snapshots and resolver decisions in separate modules makes the system easier to test, reason about and replace.

## Public Portfolio Boundary

This case study is deliberately sanitized. It does not publish:

- Oracle private keys
- Production RPC credentials
- Proprietary program source
- Internal wallet addresses where disclosure is inappropriate
- Client-specific infrastructure
- Private database contents

The original implementation remains private.
