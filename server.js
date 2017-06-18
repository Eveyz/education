const express = require('express');
const apiRouter = require('./api');
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

server.listen(config.port, () => {
  console.info('Express listenning on port ', config.port);
});

// var WebpackDevServer = require('webpack-dev-server');
// var webpack = require('webpack');
// var config = require('./webpack.config.js');
// var path = require('path');

// var webpackDevMiddleware = require("webpack-dev-middleware");
// var webpackHotMiddleware = require("webpack-hot-middleware");

// var compiler = webpack(config);
// var server = new WebpackDevServer(compiler, {
//   contentBase: 'www',
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
// });

// server.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));
 
// server.use(webpackHotMiddleware(compiler, {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 10 * 1000,
// }));

// server.listen(8080, 'localhost', function() {
//   console.info('Express listenning on port ', 8080);
//   console.log("test")
// });