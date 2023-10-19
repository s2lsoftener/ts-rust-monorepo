(cd ../.. && exec docker compose run --rm --build --service-ports ts-fastify-api bash -c "pnpm run --filter @s2lsoftener/ts-fastify-api $1 $2")
