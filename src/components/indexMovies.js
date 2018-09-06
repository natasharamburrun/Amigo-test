import React from 'react';
import axios from 'axios';

class indexMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {}
    };
    console.log(this.state.body);
  }

  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=58ae7c2490643e98de044b22b8abac1b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',{
    })
      .then(res => {
        console.log(res.data);
      });
  }


  render() {
    return (
      <main>
        <h1>Movies Index Page</h1>

      </main>
    );
  }

}

export default indexMovies;
