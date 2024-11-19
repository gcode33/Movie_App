const mongoose = require('mongoose');
const Movies = mongoose.model('Movies');  // Ensure the model is registered correctly

const homelist = function(req, res) {
    res.render('index', { 
        title: 'MovieRev!', 
        pageHeader: {
            title: 'MovieRev', 
            strapline: 'Find your next favorite movie!!'
        }
    });
};

module.exports = {homelist};
