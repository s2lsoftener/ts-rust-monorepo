import * as tsMath from '@my-org/ts-math'
import { FastifyPluginAsync } from 'fastify'

const add: FastifyPluginAsync = async (server) => {
  server.zod.post(
    '/api/v1/add',
    {
      operationId: 'add',
      body: 'Pair',
      reply: 'Number',
    },
    async ({ body: pair }): Promise<number> => {
      return tsMath.add(pair.a, pair.b)
    },
  )
}

export default add
