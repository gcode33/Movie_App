/* GET 'home' page */
/* GET 'home' page */
const request = require('request');
const movies = require('../../app_api/models/movies');
const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://movie-app-u04y.onrender.com'; 
    }
     // Assuming the 'movies' model is set up

const _renderHomepage = function(req, res, responsebody){
    res.render('movie-list', {
        title: 'MovieRev!', 
        pageHeader: {
            title: 'MovieRev', 
            strapline: 'Find your next favorite movie!!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        movies: responsebody 

    });
    };
    const homelist = function(req, res){
        const path = '/api/movie'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}, 
        qs: {
            genre: 'Drama',
            minRating: 4,
            year: '1994'
        }
        }; 
        request(
            requestOptions,function(err, response, body) {
            _renderHomepage(req, res, body); 
            }
            );
            
        };
        

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

    const RegisterInfo = function(req, res){
    res.render('register', { title: 'Sign up for our website' });
    };
    
    module.exports = {
    homelist,
    movieInfo,
    RegisterInfo,
    };
    
    
