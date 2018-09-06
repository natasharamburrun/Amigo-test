import React from 'react';
// import axios from 'axios';

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // axios.get('/api/')
    //   .then(res => this.setState({ items: res.data }));
  }

  render() {
    return (
      <main>
        <h1>Movies Index Page</h1>
      </main>
    );
  }

}

export default Index;
