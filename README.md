# Ens Integration

## Getting Started

### Prerequisites

- [Bun 1.3.11](https://bun.sh/)

### Installation

Install dependencies:

```sh
bun install --frozen-lockfile
```

### Development

Start the dev server:

```sh
bun run dev
```

The app runs at http://localhost:5173 by default.

### Build

Create a production build:

```sh
bun run build
```

Outputs to `dist/`.

`VITE_ALCHEMY_API_KEY` configures the primary Sepolia RPC and wallet-name
listing. If the primary RPC is unavailable, chain requests fall back to the
PublicNode Sepolia RPC. Wallet-name listing still needs an active Alchemy app.

### Preview

Preview the production build locally:

```sh
bun run preview
```

Serves at http://localhost:4173 by default.

### Lint

```sh
bun run lint
```
