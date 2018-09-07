import React from 'react';
import axios from 'axios';

class showMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        content: '',
        favourites: []

      }
    };
    console.log(this.state.data);
  }

  componentWillMount() {
    // In the ResultsDisplay component we link each content to /content/films/:id - this means we can get the id out of the url and request that specific content from the API

    axios.get(`/api/movies/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ moviesList: res.data.results});
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
