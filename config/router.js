const router = require('express').Router();
const tmdb = require('../controllers/tmdb');

const movies = require('../controllers/movies');
// This will request all top films
router.route('/movies')
  .get(tmdb.indexMovies);


// // This will make a request for the specific film we have supplied the id for
// router.route('/movies/:id')
//   .get(tmdb.showMovies);

router.route('/movies/:id')
  .get(tmdb.showMovies);


module.exports = router;
