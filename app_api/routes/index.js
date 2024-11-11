const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/movies'); 

// Home page
router.route('/')
  .get(ctrlLocations.homelist);

// Movies (read-only)
router.route('/movies')
  .get(ctrlLocations.movieInfo);        // List all movies
   // Get details of a specific movie

// Register
router.route('/register')
  .get(ctrlLocations.RegisterInfo)       // Render the register page
module.exports = router;
