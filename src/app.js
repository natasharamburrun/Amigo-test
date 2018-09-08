import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
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
          <Navbar />
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={IndexMovies}/>
                <Route path="/movies/:id" component={ShowMovies}/>
                <Route path="/favourites" component={Favourites}/>
              </Switch>
            </div>
            <Footer />
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
