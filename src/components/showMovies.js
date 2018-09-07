import React from 'react';
import axios from 'axios';

class showMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        favourites: []
      }
    };
    console.log(this.state.data);
  }

  componentWillMount() {
    axios.get(`/api/movies/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      });
  }

  render() {
    const imgURL= 'https://image.tmdb.org/t/p/w500/';
    return (
      <section className="section">
        <div className="container-show">
          <div className="Title">
            <h1>Movies Show Page</h1>
          </div>
          <div className="columns is-multiline">
            <div className="column is-half">
              <figure className="image">
                <img src= {`${imgURL}${this.state.data.poster_path}`} />
              </figure>
            </div>
            <div className="column is-half">

            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default showMovies;
