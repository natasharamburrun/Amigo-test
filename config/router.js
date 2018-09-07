const router = require('express').Router();
const tmdb = require('../controllers/tmdb');

// const movie = require('../controllers/movie');
// This will request all top films
router.route('/movies')
  .get(tmdb.indexMovies);


// // This will make a request for the specific film we have supplied the id for
router.route('/movies/:id')
  .get(tmdb.showMovies);


module.exports = router;
// const Movies = props => (
//   <Grid>
//     <Row>
//       {props.data.map(movie => <Movie key={movie.id} data={movie} />)}
//     </Row>
//   </Grid>
// );
