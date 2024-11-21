const express = require('express');
const router = express.Router();

const ctrlLocations = require('../../app_api/controllers/movies');  


// Home page
router.get('/', ctrlLocations.homelist);
/*router
  .route('/')
  .get(ctrlHome.homelist); */// Use the callback function directly
router.get('/movies', ctrlLocations.movieInfo);

// Route to get a specific movie by ID
router
  .route('/movies/:movieid')
  .get(ctrlLocations.MovieReadOne); 
// Use the callback function directly

// Register
/*router
  .route('/Register')
  .get(ctrlRegister.RegisterInfo);*/ // Use the callback function directly
router.get('/register', ctrlLocations.RegisterInfo);

module.exports = router;

