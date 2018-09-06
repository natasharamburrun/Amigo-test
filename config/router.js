const router = require('express').Router();
const tmdb = require('../controllers/tmdb');

router.route('/tmdb/indexMovies')
  .get(tmdb.topMovies);

router.route('/tmdb/showMovies')
  .get(tmdb.showMovies);

module.exports = router;
