const router = require('express').Router();
const tmdb = require('../controllers/tmdb');

// This will request the top films
router.route('/movies')
  .get(tmdb.indexMovies);


// This will make a request for the specific film we have supplied the id for
// router.route('/movies/:id')
//   .get(tmdb.showMovies);


module.exports = router;
