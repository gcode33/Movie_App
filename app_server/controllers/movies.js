/* GET 'home' page */
/* GET 'home' page */
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

    /* GET 'Add review' page */
    const RegisterInfo = function(req, res){
    res.render('register', { title: 'Sign up for our website' });
    };
    
    module.exports = {
    homelist,
    movieInfo,
    RegisterInfo
    };
    
    
