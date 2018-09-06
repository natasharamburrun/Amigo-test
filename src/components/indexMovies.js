import React from 'react';
import axios from 'axios';

class indexMovies extends React.Component {

  constructor() {
    super();
    this.state = {
      moviesList: []
    };
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
    console.log(this.state.moviesList);
    const imgURL= 'https://image.tmdb.org/t/p/w500/';
    return (
      <section className="section">
        <div className="container-index">
          <div className="Title">
            <h1>Movies Index Page</h1>
          </div>
          <div className="columns is-multiline">
            {this.state.moviesList.map(movie =>
              <div key={movie.id} className="column is-one-quarter-desktop is-half-tablet">

                <div className="card-movie">
                  <div className="content">
                    <h2 className="title">{movie.title}</h2>
                  </div>
                  <figure className="image">
                    <img src= {`${imgURL}${movie.poster_path}`} />
                  </figure>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      //
      //       <main>
      //         <div >
      //           <h1>Movies Index Page</h1>
      //           {this.state.moviesList ? (
      //             this.state.moviesList.map(movie =>
      //               <h2 key={movie.id}>{movie.title}</h2>
      //             )
      //           ) : (
      //             <h2>Loading... </h2>
      //           )}
      //         </div>
      //       </main>
      //     );
      //   }
      //
    );
  }
}
export default indexMovies;
