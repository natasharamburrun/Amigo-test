import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';


import indexMovies from './components/indexMovies';
import showMovies from './components/showMovies';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <section className="section">
            <div className="container">
              <Route exact path="/" component={indexMovies}/>
              <Route path="movies/:id" component={showMovies}/>
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
