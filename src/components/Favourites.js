import React from 'react';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    this.setState({ favourites: JSON.parse(localStorage.getItem('favourites')) });
  }

  unFavourite = () => {
    localStorage.removeItem('favourites');
    location.reload();
  }


  render(){
    const imgURL= 'https://image.tmdb.org/t/p/w500/';
    console.log(this.state.data.id);
    console.log(this.state);
    return(
      <section className="favourites">
        <h2 className="title is-2 movie">FAVOURITE MOVIES</h2>
        <div className="columns is-multiline">
          {this.state.movies && this.state.movies.map(movie =>
            <div key={movie.id} className="column is-one-third-desktop is-one-third-tablet is-mobile">
              <Link to={`/movies/${movie.id}`} >
                <figure className="image">
                  <img src= {`${imgURL}${this.state.data.poster_path}`} />
                  {/* <img src={this.state.data.image} /> */}
                </figure>
              </Link>

            </div>
          )}
          {!this.state.data && <h1 className="title is-4 is-centered">No Favourites</h1>}
          {this.state.data && <button onClick={this.unFavourite} className="button">Unfavourite all</button>}
        </div>
      </section>
    );
  }
}



export default Favourites;
