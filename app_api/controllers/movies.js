const mongoose = require('mongoose');
const Movies = mongoose.model('movie');  // Ensure the model is registered correctly

const homelist = function(req, res) {
    res.render('index', { 
        title: 'MovieRev!', 
        pageHeader: {
            title: 'MovieRev', 
            strapline: 'Find your next favorite movie!!'
        }
    });
};

const movieInfo = async function(req, res) {
    try {
        // Fetch all movies from the database
        const movies = await Movies.find();
        res.render('movie-list', { 
            title: 'Movie List', 
            movies 
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

const RegisterInfo = function(req, res) {
    res.render('register', { title: 'Sign up for our website' });
};

module.exports = {
    homelist,
    movieInfo,
    RegisterInfo
};

