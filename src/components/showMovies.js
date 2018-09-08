import React from 'react';
import axios from 'axios';

class ShowMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      favourites: false,
      data: {
        image: '',
        title: '',
        release_date: '',
        overview: '',
        tagline: '',
        filmId: '',
        vote_average: ''
      }
    };
  }


  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=58ae7c2490643e98de044b22b8abac1b&language=en-US&page=1`)
      .then(res =>
        this.setState({
          data: {
            image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
            title: res.data.title,
            tagline: res.data.tagline,
            release_date: res.data.release_date,
            overview: res.data.overview,
            filmId: res.data.id,
            vote_average: res.data.vote_average
          }
        }));
  }

    favouriteRoute = () => {
      if(!this.state.favourite) {
        this.setState({ favourite: true });

        if(localStorage.getItem('favourites')) {
          const currentArray = JSON.parse(localStorage.getItem('favourites'));
          //joining the fav new item to the exsiting array of favourites
          const newArray = currentArray.concat(this.toArray(this.state.data));
          //include items in localStorage into a newArray
          localStorage.setItem('favourites', JSON.stringify(newArray));
        } else
          localStorage.setItem('favourites', JSON.stringify(this.toArray(this.state.data)));
      }
    }
    //make this.toArray from array to object
    toArray = (object) => [object];
    //

    render() {
      return (
        <section className="section">
          <div className="container-show">
            <figure className="image-show">
              <img src={this.state.data.image} />
            </figure>
            <div className="content-details">
              <h2 className="title is-2 movie">{this.state.data.title}</h2>
              <h2 className="title is-3 movie">{this.state.data.tagline}</h2>
              <h2 className="title is-6 movie">Release Date: {this.state.data.release_date}</h2>
              <h2 className="title is-5 overviewtitle"><strong>Overview:</strong></h2>
              <h2 className="title is-5 movie">{this.state.data.overview}</h2>
              <div className="container-icons">
                <h2  className="fav-icon" onClick={this.favouriteRoute}><i
                  className={`${!this.state.favourite ? 'far' : 'fas'} fa-heart`}></i></h2>
                <p className="title is-6 movie-vote-average">{this.state.data.vote_average}</p>
              </div>
            </div>
          </div>
        </section>
      );
    }
}
export default ShowMovies;
