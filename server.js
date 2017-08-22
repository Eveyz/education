const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

const config = require('./config.js');
const apiRouter = require('./api/index.js');
const blogsAPI = require('./api/blogs.js');
const router = require('react-router');

// const passport = require('./auth.js');

const server = express();

// Express Middleware
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));


/* API 
 * @author: znz
*/
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/buy';
mongoose.connect(url);

// API middleware
server.use('/', apiRouter);
server.use('/blogs', blogsAPI);

// server.use(function(req, res) {
//   Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message)
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
//       var page = swig.renderFile('views/index.html', { html: html });
//       res.status(200).send(page);
//     } else {
//       res.status(404).send('Page Not Found')
//     }
//   });
// });

// server.get('*', function(req, res){
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// });


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
