import { createServer } from './server'
;(async () => {
  const server = await createServer()

  server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err)
    }

    console.log(`Server listening at: ${address}`)
  })
})().catch((e) => console.error(e))
