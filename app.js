const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Import route files
require('./app_api/models/db');
const apiRoutes = require('./app_api/routes/index');
const frontendRoutes = require('./app_server/routes/index');

const app = express();
const cors = require('cors');


// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));


app.use(cors());
app.use('/api/moive', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200/');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });
  
// Route setup
app.use('/', frontendRoutes); // Frontend routes
app.use('/api', apiRoutes);   // API routes

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const createError = require('http-errors');
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
