import add from './add'
import subtract from './subtract'
import multiply from './multiply'
import divide from './divide'
import type { FastifyPluginAsync } from 'fastify'

const v1: FastifyPluginAsync = async (server) => {
  await Promise.all(
    [add, subtract, multiply, divide].map(async (route) => {
      await server.register(route)
    }),
  )
}

export { v1 }
