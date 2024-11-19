const express = require('express');
const router = express.Router();

const ctrlLocations = require('../../app_api/controllers/movies'); 
const ctrlHome = require('../../app_api/controllers/homeList'); 
const ctrlRegister = require('../../app_api/controllers/Register'); 


// Home page
router
  .route('/')
  .get(ctrlHome.homelist); // Use the callback function directly

// Route to get a specific movie by ID
router
  .route('/movies/:movieid')
  .get(ctrlLocations.MovieReadOne); 
// Use the callback function directly

// Register
router
  .route('/register')
  .get(ctrlRegister.RegisterInfo); // Use the callback function directly

module.exports = router;

