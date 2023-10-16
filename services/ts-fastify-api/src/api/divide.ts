import * as tsMath from '@my-org/ts-math'
import type { FastifyPluginAsync } from 'fastify'

const divide: FastifyPluginAsync = async (server) => {
  server.zod.post(
    '/api/v1/divide',
    {
      operationId: 'divide',
      body: 'Pair',
      reply: 'Number',
    },
    async ({ body: pair }) => {
      return tsMath.divide(pair.a, pair.b)
    },
  )
}

export default divide
