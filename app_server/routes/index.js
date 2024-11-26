const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/movies'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/api/movies', ctrlLocations.dataPage)
router.get('/movies', ctrlLocations.movieInfo);
router.get('/register', ctrlLocations.RegisterInfo);
/* Other pages */
module.exports = router;



