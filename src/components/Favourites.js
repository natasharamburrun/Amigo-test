import React from 'react';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentWillMount = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    this.setState({ movies: favourites });
  }

  unFavourite = () => {
    localStorage.removeItem('favourites');
    location.reload();
  }

  render(){
    console.log(this.state);
    return(
      <section className="favourites">
        <h2 className="title is-2 movie">FAVOURITE MOVIES</h2>
        <div className="columns is-multiline">
          {this.state.movies && this.state.movies.map(movie =>
            <div key={movie.id} className="column is-one-third-desktop is-one-third-tablet is-mobile">
              <Link to={`/movies/${movie.id}`} >
                <h2 className="title is-2 movie">{movie.title}</h2>
                <figure className="image">
                  <img src={movie.image} />
                </figure>
              </Link>
            </div>
          )}
          {!this.state.movies && <h1 className="title is-4 is-centered">No Favourites</h1>}
          {this.state.movies && <button onClick={this.unFavourite} className="button">Clear All</button>}
        </div>
      </section>
    );
  }
}



export default Favourites;
