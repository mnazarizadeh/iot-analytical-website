import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="introw" className="clearfix">
          <div className="container">
            <div className="intro-img">
              <img
                id="intro-img-1"
                src="assets/img/smarthome_large.png"
                alt="intro"
              />
            </div>

            <div className="intro-info">
              <h2>
                A Blue Sky
                <br />
                Is What We Offer
              </h2>
              <div>
                <a href="/" className="btn-get-started animated infinite pulse">
                  Preorder
                </a>
                <a href="#about" className="btn-services scrollto">
                  Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Intro;
