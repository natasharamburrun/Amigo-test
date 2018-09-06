const router = require('express').Router();
const tmdb = require('../controllers/tmdb');

router.route('/tmdb/topMovies')
  .get(tmdb.topMovies);

module.exports = router;
