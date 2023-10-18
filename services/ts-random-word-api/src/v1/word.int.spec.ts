import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { FastifyInstance } from 'fastify'
import { createServer } from '../server'

describe('/word', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  afterAll(async () => {
    await app.close()
  })

  test('random word', async () => {
    for (let i = 0; i < 100; i++) {
      const res = await app.inject({
        method: 'GET',
        url: '/api/v1/word',
      })

      const word = res.body

      expect(['apple', 'banana', 'cat', 'dog']).toContain(word)
    }
  })
})
