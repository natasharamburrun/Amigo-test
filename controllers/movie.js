const Movies = require('../models/Movies');

function showRoute(req, res, next) {
  return Movies.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(next);
}


module.exports = {
  show: showRoute
};
