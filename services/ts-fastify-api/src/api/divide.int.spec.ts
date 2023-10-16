import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { FastifyInstance } from 'fastify'
import { createServer } from '../server'

describe('divide', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  afterAll(async () => {
    await app.close()
  })

  test('100 / 2 = 50', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/divide',
      body: {
        a: 100,
        b: 2,
      },
    })

    expect(res.body).toEqual('50')
  })
})
