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
const homelist = function(req, res) {
    res.render('index', { 
        title: 'MovieRev!', 
        pageHeader: {
            title: 'MovieRev', 
            strapline: 'Find your next favorite movie!!'
        }
    });
};
/* GET 'home' page (Login Page) */
const dataPage = function(req, res) {
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
const movieInfo = function (req, res) {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            director: 'Directed by Frank Darabont',
            rating: 5,
            genres: ['Drama', 'Prison'],
            releaseDate: '1994',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
        },
        {
            title: 'Inception',
            director: 'Directed by Christopher Nolan',
            rating: 4,
            genres: ['Sci-Fi', 'Thriller'],
            releaseDate: '2010',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
        },
        {
            title: 'The Godfather',
            director: 'Directed by Francis Ford Coppola',
            rating: 4,
            genres: ['Crime', 'Drama'],
            releaseDate: '1972',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
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
    RegisterInfo,
    dataPage
};
