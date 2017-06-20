const express = require('express');
const apiRouter = require('./api/index.js');
const config = require('./config.js');

const server = express();

server.set('view engine', 'ejs');

server.use('api', apiRouter);
server.use(express.static('public'));

// set up assets for app
server.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
server.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
server.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
server.use('/css', express.static(__dirname + '/node_modules/font-awesome/css'));
server.use('/css', express.static(__dirname + '/public'));

server.listen(config.port, () => {
  console.info('Express listenning on port ', config.port);
});