import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
  
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg custom-toggler fixed-top navbar-site">
          <div className="container">
            <a className="navbar-brand" href="#introw">
              <img id="logo-img" src="./assets/img/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="navbar-items-custom" className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <AnchorLink id="homelink" className="nav-link" href="#introw">
                    Home
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#about">
                    Features
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" offset='80' href="#video">
                    Video
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#faq">
                    FAQ
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#team">
                    Team
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link mr-3" href="#contact">
                    Contact Us
                  </AnchorLink>
                </li>
              </ul>

              <button
                className="btn btn-custom-iot my-2 my-sm-0 px-4"
                onClick={() => this.props.history.push(`/login`)}
              >
                Log in
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
