import fastify from 'fastify'
import type { FastifyZod } from 'fastify-zod'
import { buildJsonSchemas, register } from 'fastify-zod'
import { models } from './models'
import { v1 } from './api'

// Fastify recommends declaration merging for plugins
declare module 'fastify' {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>
  }
}

export const createServer = async () => {
  const base = fastify()
  const server = await register(base, {
    jsonSchemas: buildJsonSchemas(models),
  })

  await server.register(v1)

  return server
}
