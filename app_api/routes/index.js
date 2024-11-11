const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/movies'); 

// Home page
router
  .get(('/'),ctrlLocations.homelist);

// Movies (read-only)
router
  .get(('/movies'),ctrlLocations.movieInfo);        // List all movies
   // Get details of a specific movie

// Register
router
   .get(('/register'),ctrlLocations.RegisterInfo)       // Render the register page
module.exports = router;
