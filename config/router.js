const router = require('express').Router();
const movies = require('../controllers/movies');

router.route('/movies/topMovies')
  .get(movies.topMovies);

module.exports = router;
