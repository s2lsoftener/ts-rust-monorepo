import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { FastifyInstance } from 'fastify'
import { createServer } from '../server'

describe('subtract', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  afterAll(async () => {
    await app.close()
  })

  test('15 - 2 = 13', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/subtract',
      body: {
        a: 15,
        b: 2,
      },
    })

    expect(res.body).toEqual('13')
  })
})
