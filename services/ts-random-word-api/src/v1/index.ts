import word from './word'
import type { FastifyPluginAsync } from 'fastify'

export const v1: FastifyPluginAsync = async (server) => {
  await server.register(word)
}
