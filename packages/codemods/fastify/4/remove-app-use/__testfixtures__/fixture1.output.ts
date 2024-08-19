const fastify = require('fastify')();
const middie = require('@fastify/middie');

fastify.register(middie);

fastify.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});

fastify.get('/example', (req, res) => {
    res.send('Hello, World!');
});

fastify.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


