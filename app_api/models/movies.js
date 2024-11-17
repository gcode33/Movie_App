const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  releaseDate: {
    type: String
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  genres: {
    type: [String]
  },
  description: {
    type: String,
    required: true
  }
}, { collection: 'locations' });  // Specify the collection name 'location'

module.exports = mongoose.model('locations', movieSchema);

