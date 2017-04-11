'use strict';

const Hapi = require('hapi');

// Load models
var models = glob.sync("models/**/*.js");
models.forEach(function (modelPath) {
  require(path.resolve(modelPath));
});

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
