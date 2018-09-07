const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  content: {
    movieImg: { type: String },
    title: { type: String },
    mediaType: { type: String  },
    userId: { type: String }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
