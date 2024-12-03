const mongoose = require('mongoose');
const Movies = mongoose.model('Movies'); // Assuming the 'movies' model is set up

const homelist = function(req, res) {
    res.render('index', { 
        title: 'MovieRev!', 
        pageHeader: {
            title: 'MovieRev', 
            strapline: 'Find your next favorite movie!!'
        }
    });
};
const movieInfo = function(req, res) {
    const movies = [
        { 
            movie: 'The Shawshank Redemption',
            director: 'Directed by Frank Darabont',
            rating: 5,
            genre: ['Drama', 'Prison'],
            year: '1994',
            description: 'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion'
        },
        {
            movie: 'Inception',
            director: 'Directed by Christopher Nolan',
            rating: 4,
            genre: ['Sci-Fi', 'Thriller'],
            year: '2010',
            description: 'Dom Cobb is a thief with the rare ability to enter peoples dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves'


        },
        {
            movie: 'The Godfather',
            director: 'Directed by Francis Ford Coppola',
            rating: 4,
            genre: ['Crime', 'Drama'],
            year: '1972',
            description: 'The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather), on the wedding day of his daughter, Connie.'

        }
    ];

    res.render('movie-list', { 
        title: 'Movie List', 
        movies 
    });
};


// Controller to fetch a specific movie by ID
const MovieReadOne = function(req, res) {
    Movies
	.findById(req.params.movieid) 
	.then((Movies,err) => { 

        console.log(req.params.movieid);
        console.log(Movies);
		res 
			.status(200) 
			.json(Movies); 
	});
};
// Function to fetch all movies
const getAllMovies = async (req, res) => {
    try {
      const movies = await Movies.find(); // Fetch all documents from the movies collection
      res.status(200).json(movies); // Return the movies as JSON
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ message: 'An error occurred while fetching movies' });
    }
  };
const RegisterInfo = function(req, res){
    res.render('register', { title: 'Sign up for our website' });
    };
    
    module.exports = {
    homelist,
    movieInfo,
    RegisterInfo,
    MovieReadOne,
    getAllMovies
    };






