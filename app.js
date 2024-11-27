var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import your route files
require('./app_api/models/db');
require('./app_api/models/movies');
const apiRoutes = require('./app_api/routes/index');
const movieController = require('./app_server/controllers/movies');
const locationController = require('./app_api/controllers/movies');
const index = require('./app_server/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/', index);
app.use('/api', apiRoutes);

// Web routes
const webRoutes = require('./app_server/routes/index');
app.use('/', webRoutes);

// Set up specific routes
app.get('/', locationController.homelist);
app.get('/register', locationController.RegisterInfo);
//app.get('/api/movie', movieController.dataPage); // This now uses dataPage to fetch and render movies
app.get('/movie-info', locationController.movieInfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;