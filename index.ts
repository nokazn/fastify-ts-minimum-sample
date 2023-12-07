import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.register((server, options, done) => {
  // If you uncomment the line below, you can see error on `after` event.
  // done(new Error('something occurred'));
  done();
});

fastify.after((error) => {
  console.error({ error }, 'error has occurred on `after` event');
});
fastify.ready((error) => {
  console.error({ error }, 'error has occurred on `ready` event');
});

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  fastify.log.debug(`Server is now listening on ${address}`);
});
