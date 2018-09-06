const rp = require('request-promise');

function topMovies(req, res) {
  return rp({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=58ae7c2490643e98de044b22b8abac1b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    json: true
  })
    .then(data => res.json(data));

}

module.exports = {
  topMovies
};
