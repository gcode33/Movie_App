const mongoose = require('mongoose');
const Movies = mongoose.model('Movies'); // Assuming the 'movies' model is set up

// Controller to fetch all movies
const getAllMovies = async function(req, res) {
    try {
        const movies = await Movies.find();  // Fetch all movies from the database

        if (movies.length === 0) {
            return res.status(404).json({ status: 'error', message: 'No movies found' });
        }

        // Render the 'movies-list' view and pass the movies data
        res.render('movies-list', {
            title: 'Movie List',
            movies: movies  // Pass the movies array to the view
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('An error occurred while fetching the movie list.');
    }
};


// Controller to fetch a specific movie by ID
const MovieReadOne = async function(req, res) {
    Movies
	.findById(req.params.movieid) 
	.then((Movies,err) => { 
		res 
			.status(200) 
			.json(Movies); 
	});
};

module.exports = { getAllMovies, MovieReadOne };




