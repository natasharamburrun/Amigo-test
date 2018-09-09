import React from 'react';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount = () => {
    this.getFavouritemovies();
  }

  getFavouritemovies = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    this.setState({ movies: favourites });
  }

  unfavouriteRoute = () => {
    localStorage.removeItem('favourites');
    location.reload();
  }

  render(){

    console.log(this.state);
    return(
      <section className="favourites">
        <h2 className="title is-4 fav-title">Favourite Movies</h2>
        <div className="columns is-multiline">
          {this.state.movies && this.state.movies.map(movie =>
            <div key={movie.filmId} className="column is-one-quarter-desktop is-one-third-tablet is-mobile">
              <Link to={`/movies/${movie.filmId}`}>
                <figure className="image-fav">
                  <img src={movie.image} />
                </figure>
                <div className="content-favtitle">
                  <h2 className="title is-6 movie-title">{movie.title}</h2>
                </div>
              </Link>
            </div>
          )}
        </div>
        {!this.state.movies && <h1 className="title is-4 is-centered">No Favourites</h1>}
        {this.state.movies && <button onClick={this.unfavouriteRoute} className="button">Clear All</button>}
      </section>
    );
  }
}



export default Favourites;
