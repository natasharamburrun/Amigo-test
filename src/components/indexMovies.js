import React from 'react';
import axios from 'axios';

class indexMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      moviesList: []
    };
    console.log(this.state.body);
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
    return (
      <main>
        <h1>Movies Index Page</h1>
        {this.state.moviesList ? (
          this.state.moviesList.map(movie =>
            <h2 key={movie.id}>{movie.title}</h2>
          )
        ) : (
          <h2>Loading... </h2>
        )}
      </main>
    );
  }

}

export default indexMovies;
