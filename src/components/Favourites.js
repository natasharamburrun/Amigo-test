import React from 'react';

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
        <h2 className="title is-4 fav-title">Favourite Movies</h2>
        <div className="columns is-multiline">
          {this.state.movies && this.state.movies.map(movie =>
            <div key={movie.id} className="column is-one-quarter-desktop is-half-tablet is-mobile">
              <figure className="image-fav">
                <img src={movie.image} />
              </figure>
              <h2 className="title is-6 movie">{movie.title}</h2>
            </div>
          )}
        </div>
        {!this.state.movies && <h1 className="title is-4 is-centered">No Favourites</h1>}
        {this.state.movies && <button onClick={this.unFavourite} className="button">Clear All</button>}
      </section>
    );
  }
}



export default Favourites;
