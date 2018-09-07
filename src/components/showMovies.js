import React from 'react';
import axios from 'axios';

class showMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      moviesInfo: []
    };
  }

  componentWillMount() {
    // In the ResultsDisplay component we link each content to /content/films/:id - this means we can get the id out of the url and request that specific content from the API
    const tmdbId = this.props.match.params.id;

    axios.get(`api/movies/${tmdbId}`,{
    })
      .then(res => {
        console.log(res.data.results);
        this.setState({ moviesInfo: res.data.results});

      });
  }

  render() {
    return (

      <main>
        <h1>Movies Show Page</h1>
      </main>
    );
  }

}

export default showMovies;
