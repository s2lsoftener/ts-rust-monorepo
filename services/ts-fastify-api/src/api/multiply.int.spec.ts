import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { FastifyInstance } from 'fastify'
import { createServer } from '../server'

describe('multiply', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  afterAll(async () => {
    await app.close()
  })

  test('4 * 9 = 36', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/multiply',
      body: {
        a: 4,
        b: 9,
      },
    })

    expect(res.body).toEqual('36')
  })
})
