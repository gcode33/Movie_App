const mongoose = require('mongoose');
const Movies = mongoose.model('Movies');

const RegisterInfo = function(req, res) {
    res.render('register', { title: 'Sign up for our website' });
};
module.exports = {RegisterInfo};