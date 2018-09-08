
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
            Movie Database.
            </p>
            <div id="social">
              <h4 className="footerSocialmedia">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-square"></i>
              </h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default (Footer);
