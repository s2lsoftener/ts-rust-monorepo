# ts-rust-monorepo

Monorepo template for TypeScript + Rust packages and services.

## Features

- [x] Containerized local development using Docker
- [x] [pnpm](https://pnpm.io/) for managing JS dependencies
- [x] [Cargo Workspace](https://doc.rust-lang.org/cargo/reference/workspaces.html) for Rust projects
- [ ] [Nx](https://nx.dev/) for running and caching tasks under a cross-language dependency graph.
- [ ] Auto-generated OpenAPI (swagger) docs and shared type libs for TypeScript and Rust services
- [ ] Version and release management using [changesets](https://github.com/changesets/changesets)

## Quick Start

Initialize .env files:

```sh
./dev/init-env.sh
```

To enable local development:

```sh
pnpm install
```

To start the services locally:

```sh
docker compose up -d --build
docker compose logs -f
```

Services will build and start according to this project graph.

```mermaid
flowchart LR
    subgraph ts1["/packages"]
        A[ts-add]
        B[ts-subtract]
        C[ts-math]
        A --> C
        B --> C

        D[rust-factorial]
        E[rust-fibonacci]
        F[rust-math]
        D --> F
        E --> F
    end

    subgraph services["/services"]
        G[rust-axum-api]
        F --> G

        H[ts-fastify-api]
        C --> H
        G --> H
    end
```
