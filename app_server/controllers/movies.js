/* GET 'home' page */
/* GET 'home' page */
const mongoose = require('mongoose');
const Movies = mongoose.model('Movies');
const request = require('request');
const apiOptions = { 
    server: 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://movie-app-u04y.onrender.com'; 
}

// PUBLIC METHODS

/* GET 'home' page (Login Page) */
const homelist = function(req, res) {
    const path = '/api/movies'; 
    const requestOptions = { 
        url: apiOptions.server + path, 
        method: 'GET', 
        json: {}, 
        qs: {
            title: 'Inception', // Sample query params; customize as needed
            rating: 4,
            director: 'Directed by Christopher Nolan'
        }
    }; 
    
    request(requestOptions, (err, response, body) => {
        if (err || response.statusCode !== 200) {
            res.status(response ? response.statusCode : 500).render('error', {
                title: 'Error',
                message: 'Something went wrong while fetching the data.'
            });
        } else {
            _renderHomepage(req, res, body);
        }
    });
    
};

/* GET 'Movie Info' page */
const movieInfo = function(req, res) {
    const movies = [
        { 
            movie: 'The Shawshank Redemption',
            director: 'Directed by Frank Darabont',
            rating: 5,
            genre: ['Drama', 'Prison'],
            year: '1994'
        },
        {
            movie: 'Inception',
            director: 'Directed by Christopher Nolan',
            rating: 4,
            genre: ['Sci-Fi', 'Thriller'],
            year: '2010'
        },
        {
            movie: 'The Godfather',
            director: 'Directed by Francis Ford Coppola',
            rating: 4,
            genre: ['Crime', 'Drama'],
            year: '1972'
        }
    ];

    res.render('movie-list', { 
        title: 'Movie List', 
        movies 
    });
}; 

/* GET 'Register' page */
const RegisterInfo = function(req, res) {
    res.render('register', { 
        title: 'Sign up for MovieRev!',
        pageHeader: {
            title: 'Join MovieRev',
            strapline: 'Share and explore amazing movies with fellow movie enthusiasts!'
        }
    });
};

// PRIVATE METHODS

/* Render Homepage */
const _renderHomepage = function(req, res, responseBody) {
    res.render('movie-list', {
        title: 'MovieRev!',
        pageHeader: {
            title: 'MovieRev',
            strapline: 'Find your next favorite movie!'
        },
        sidebar: 'Discover top-rated movies from various genres and years.',
        movies: responseBody, // Pass movies or an empty array if no data
    });
};





module.exports = {
    homelist,
    movieInfo,
    RegisterInfo
};
