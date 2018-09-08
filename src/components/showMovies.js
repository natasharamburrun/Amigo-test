import React from 'react';
import axios from 'axios';

class ShowMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      favourites: false,
      movies: [],
      data: {
        image: '',
        title: '',
        release_date: '',
        overview: '',
        tagline: ''
      }
    };
    // console.log(this.state.data);
  }


  componentDidMount() {
    axios.get(`/api/movies/${this.props.match.params.id}`)
      // .then(res => {
      //   this.setState({ data: res.data });
      // })

      // .then(res =>
      //   this.setState({
      //     data: {
      //       image: `https://image.tmdb.org/t/p/w500/${res.data.poster_path}`,
      //       title: res.data.title,
      //       tagline: res.data.tagline,
      //       release_date: res.data.release_date,
      //       overview: res.data.overview,
      //       filmId: res.data.id
      //     }
      //   }))
      .then(res => this.setState({ data: res.data }))
      .then(() => {
        if(localStorage.getItem('favourites')) {
          this.setState({ favourite: this.checkIfFavourited() });
        }
      });
  }

  //*********************************************
  // check for exsiting favs:
  // get current favorites from local storage
  // map over movie id to check for favorites
  // bring back all has been starred as favourite
  //*********************************************

  checkIfFavourited = () => {
    console.log(this.state.data.id);
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    const movie = favourites.map(data => data.id);
    return movie.includes(this.state.data.id);
  }

  //ensure that only can favourite one time when click on star
    addFavourite = () => {
      if(!this.state.favourite) {
        this.setState({ favourite: true });

        if(localStorage.getItem('favourites')) {
          //find current array of favorite items
          const currentArray = JSON.parse(localStorage.getItem('favourites'));
          //joining added item to the exsiting array of favourites
          const newArray = currentArray.concat(this.toArray(this.state.data));
          //include items in localStorage
          localStorage.setItem('favourites', JSON.stringify(newArray));
        } else
        //saves the items passed in the json into the array
          localStorage.setItem('favourites', JSON.stringify(this.toArray(this.state.data)));
      }
    }
    //function to make this.toArray from array to object
    toArray = () => [];



    render() {
      const imgURL= 'https://image.tmdb.org/t/p/w500/';
      return (
        <section className="section">
          <div className="container-show">
            <div className="columns is-multiline">
              <div className="column is-half">
                <figure className="image">
                  {/* <img src={this.state.data.image} /> */}
                  <img src= {`${imgURL}${this.state.data.poster_path}`} />
                </figure>
              </div>
              <div className="column is-half">
                <h2 className="title is-2 movie">{this.state.data.title}</h2>
                <h2 className="title is-3 movie">{this.state.data.tagline}</h2>
                <h2 className="title is-6 movie">Release Date: {this.state.data.release_date}</h2>
                <h2 className="title is-5 overviewtitle">Overview:</h2>
                <h2 className="title is-5 movie">{this.state.data.overview}</h2>

                <h2 onClick={this.addFavourite}><i id="star"
                  className={`${!this.state.favourite ? 'far' : 'fas'} fa-star`}></i></h2>
              </div>
            </div>
          </div>
        </section>
      );
    }
}
export default ShowMovies;
