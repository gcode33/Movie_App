const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/movies', ctrlLocations.movieInfo);
router.get('/register', ctrlLocations.RegisterInfo);
/* Other pages */
module.exports = router;



