import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class IndexMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      moviesList: []
    };
  }

  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=58ae7c2490643e98de044b22b8abac1b&language=en-US&page=1',{
    })
      .then(res => {
        console.log(res.data);
        this.setState({ moviesList: res.data.results});
      });
  }

  render() {
    const imgURL= 'https://image.tmdb.org/t/p/w500/';
    return (
      // <section className="hero is-primary is-medium">
      //   <div className="hero-body">
      //     <div className="container">
      //       <h1 className="title">
      //         Medium title
      //       </h1>
      //       <h2 className="subtitle">
      //         Medium subtitle
      //       </h2>
      //     </div>
      //   </div>
      // </section>
      <section className="section-index">
        <div className="container-index">
          <h2 className="title is-4 movie-title">Popular Movies</h2>
          <div className="columns is-multiline">
            {this.state.moviesList.map(movie =>
              <div key={movie.id} className="column is-one-quarter-desktop is-half-tablet is-mobile">
                <Link to={`/movies/${movie.id}`}>
                  <div className="card-movie">
                    <figure className="image">
                      <img src= {`${imgURL}${movie.poster_path}`} />
                    </figure>
                    <div className="content-title">
                      <h2 className="title is-6 movie-title">{movie.title}</h2>
                    </div>
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
export default IndexMovies;
