import { FastifyPluginAsync } from 'fastify'

const word: FastifyPluginAsync = async (server) => {
  server.zod.get(
    '/api/v1/word',
    {
      operationId: 'word',
      reply: 'Word',
    },
    async (): Promise<string> => {
      const words = ['apple', 'banana', 'cat', 'dog']
      const word = words[Math.floor(Math.random() * words.length)]

      return word
    },
  )
}

export default word
