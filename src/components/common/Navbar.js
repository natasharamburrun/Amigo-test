import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

  state = {
    navbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">

        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={this.toggleNavbar}>Movies</Link>
            <Link to="/favourites" className="navbar-item" onClick={this.toggleNavbar}>Favourites</Link>
          </div>
        </div>

        <a role="button"
          className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={this.toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </nav>
    );
  }
}

export default (Navbar);
