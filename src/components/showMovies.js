import React from 'react';
import axios from 'axios';

class showMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        image: '',
        title: '',
        release_date: '',
        overview: '',
        tagline: '',
        favourites: []

      }
    };
    console.log(this.state.data);
  }

  componentWillMount() {
    axios.get(`/api/movies/${this.props.match.params.id}`)
      // .then(res => {
      //   this.setState({ data: res.data });
      // });

      .then(res =>
        this.setState({
          data: {
            image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
            title: res.data.title,
            tagline: res.data.tagline,
            release_date: res.data.release_date,
            overview: res.data.overview,
            filmId: res.data.id
          }
        }));
  }

  render() {
    // const imgURL= 'https://image.tmdb.org/t/p/w500/';
    return (
      <section className="section">
        <div className="container-show">
          <div className="columns is-multiline">
            <div className="column is-half">
              <figure className="image">
                <img src={this.state.data.image} />
              </figure>
            </div>
            <div className="column is-half">
              <h2 className="title is-2 movie">{this.state.data.title}</h2>
              <h2 className="title is-3 movie">{this.state.data.tagline}</h2>
              <h2 className="title is-6 movie">Release Date: {this.state.data.release_date}</h2>
              <h2 className="title is-5 overviewtitle">Overview:</h2>
              <h2 className="title is-5 movie">{this.state.data.overview}</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default showMovies;
