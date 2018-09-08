import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';


import IndexMovies from './components/IndexMovies';
import ShowMovies from './components/ShowMovies';
import Favourites from './components/Favourites';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <section className="section">
            <div className="container">
              <Route exact path="/" component={IndexMovies}/>
              <Route path="/movies/:id" component={ShowMovies}/>
              <Route path="/favourites" component={Favourites}/>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
