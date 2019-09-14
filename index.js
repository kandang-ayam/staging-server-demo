const fastify = require('fastify')({ logger: true })

const IS_STAGING = process.env.IS_STAGING

fastify.get('/healthcheck', (request, reply) => {
  reply.send('OK')
})

fastify.get('/', (request, reply) => {
  reply
    .type('text/html')
    .send(`<h2>Hello world</h2>${IS_STAGING ? '(staging)' : ''}`)
})

fastify.listen(process.env.PORT, process.env.HOST)
