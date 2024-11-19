var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import your route files
// First, connect to the database
require('./app_api/models/db');
require('./app_api/models/movies');
const apiRoutes = require('./app_api/routes/index');

  // Ensure this path is correct
// Import the location controller
const locationController = require('./app_api/controllers/movies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
app.use('/api', apiRoutes);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
// Add the routes for movies
//app.get('/movies', locationController.getAllMovies); // Movie List
app.get('/movies', locationController.MovieReadOne); // Movie List

//app.get('/register', locationController.RegisterInfo); // Add Review page

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

