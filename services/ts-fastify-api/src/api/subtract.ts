import * as tsMath from '@s2lsoftener/ts-math'
import type { FastifyPluginAsync } from 'fastify'

const subtract: FastifyPluginAsync = async (server) => {
  server.zod.post(
    '/api/v1/subtract',
    {
      operationId: 'subtract',
      body: 'Pair',
      reply: 'Number',
    },
    async ({ body: pair }) => {
      return tsMath.subtract(pair.a, pair.b)
    },
  )
}

export default subtract
