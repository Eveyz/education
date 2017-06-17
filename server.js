const express = require('express');
const apiRouter = require('./api');
const config = require('./config.js');

const server = express();

server.set('view engine', 'ejs');

server.use('api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listenning on port ', config.port);
});
