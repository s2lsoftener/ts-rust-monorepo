import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { FastifyInstance } from 'fastify'
import { createServer } from '../server'

describe('/add', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = await createServer()
  })

  afterAll(async () => {
    await app.close()
  })

  test('2 + 3 = 5', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/add',
      body: {
        a: 2,
        b: 3,
      },
    })

    expect(res.body).toEqual('5')
  })
})
