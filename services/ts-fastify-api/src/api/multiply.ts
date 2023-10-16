import * as tsMath from '@my-org/ts-math'
import type { FastifyPluginAsync } from 'fastify'

const multiply: FastifyPluginAsync = async (server) => {
  server.zod.post(
    '/api/v1/multiply',
    {
      operationId: 'multiply',
      body: 'Pair',
      reply: 'Number',
    },
    async ({ body: pair }) => {
      return tsMath.multiply(pair.a, pair.b)
    },
  )
}

export default multiply
