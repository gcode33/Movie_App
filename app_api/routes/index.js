const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/movies'); 
const ctrlHome = require('../controllers/homeList'); 
const ctrlRegister = require('../controllers/Register'); 


// Home page
router
  .route('/')
  .get(ctrlHome.homelist); // Use the callback function directly

// Movies (read-only)
router.route('/movies')
  .get(ctrlLocations.getAllMovies);  // Controller method to fetch all movies

// Route to get a specific movie by ID
router.route('/movies/:movieid')
  .get(ctrlLocations.MovieReadOne); 
// Use the callback function directly

// Register
router
  .route('/register')
  .get(ctrlRegister.RegisterInfo); // Use the callback function directly

module.exports = router;

