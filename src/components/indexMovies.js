import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class indexMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      moviesList: []
    };
  }

  componentWillMount() {
    axios.get('/api/movies',{
    })
      .then(res => {
        console.log(res.data);
        this.setState({ moviesList: res.data.results});
      });
  }

  render() {
    // console.log(this.state.moviesList);
    const imgURL= 'https://image.tmdb.org/t/p/w500/';
    return (
      <section className="section">
        <div className="container-index">
          <div className="Title">
            <h1>Movies Index Page</h1>
          </div>
          <div className="columns is-multiline">
            {this.state.moviesList.map(movie =>
              <div key={movie.id} className="column is-one-quarter-desktop is-half-tablet">
                <Link to={`/movies/${movie.id}`}>
                  <div className="card-movie">
                    <div className="content">
                      <h2 className="title">{movie.title}</h2>
                    </div>
                    <figure className="image">
                      <img src= {`${imgURL}${movie.poster_path}`} />
                    </figure>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default indexMovies;
