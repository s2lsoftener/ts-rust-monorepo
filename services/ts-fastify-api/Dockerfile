# This image tag name gets set in CI.
ARG NODE_VERSION
ARG WORKDIR
FROM s2l-node as build

RUN pnpm --filter @s2lsoftener/ts-fastify-api exec tsc --build

FROM build as pruned
ARG WORKDIR
WORKDIR ${WORKDIR}

RUN pnpm --filter @s2lsoftener/ts-fastify-api --prod deploy pruned

FROM node:${NODE_VERSION} as production
ARG WORKDIR
WORKDIR ${WORKDIR}

ENV NODE_ENV=production

COPY --from=pruned ${WORKDIR}/pruned .
