import React, { Component } from "react";
import { WOW } from "wowjs";

class Features extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true
    });

    wow.init();
  }

  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Features</h3>
              <p>
                Make your home smart to use energy more efficiently and save it
                for next generations by using IoT Analytical.
              </p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <p className="testparag">
                  IoT Analytical is an energy utilization data analyzer that
                  makes it easy for everyone to have their household consumption
                  visualized by observing water, gas, and electricity usage. It
                  also provides sustainable consumption recommendations based on
                  consumer usage patterns. It is easy to install, integrates
                  with all smart home systems, and transforms any house or
                  apartment into an environmentally friendly smart home.
                </p>
                <div id="wrapper-features1">
                  <div className="icon-box wow fadeInLeft">
                    <div className="icon">
                      <i className="fa fa-refresh"></i>
                    </div>
                    <h4 className="title">
                      <span>Compatibility</span>
                    </h4>
                    <p className="description">
                      Add this easy-to-install product to any kind of smart home
                      system you have. It could be integrated fast and smart.
                      Now ready to interact with your modules and sensors.
                    </p>
                  </div>

                  <div
                    className="icon-box wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <i className="fa fa-bar-chart"></i>
                    </div>
                    <h4 className="title">
                      <span>Visualization</span>
                    </h4>
                    <p className="description">
                      Get usage chart in various predefined time periods and
                      compare with users' total mean in selected time range.
                    </p>
                  </div>

                  <div
                    className="icon-box wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="fa fa-thumbs-o-up"></i>
                    </div>
                    <h4 className="title">
                      <span>Recommendation</span>
                    </h4>
                    <p className="description">
                      Based on user consumption patterns, the best usage plan
                      will be recommended automatically. Artificial Inteligence
                      makes prodigious discrimination in decisions.
                    </p>
                  </div>

                  <div
                    className="icon-box wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <h4 className="title">
                      <span>Eco-friendly</span>
                    </h4>
                    <p className="description">
                      Less wasted energy on cooling and heating, smarter usage
                      of lighting and appliances, and saving water in household
                      usage will help make a big difference in improving the
                      environment by applying smart decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight my-auto pb-5">
                <img
                  src="assets/img/about-img.svg"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInLeft pb-4">
                <img
                  src="assets/img/Phone.png"
                  className="rounded mx-auto d-block"
                  alt="about"
                />
              </div>
              <div className="col-lg-6 wow fadeInRight my-auto ">
                <h4 className="testh">
                  Access your custom dashboard on your smartphone anywhere,
                  anytime!
                </h4>
                <p className="testparag"></p>
                <p className="testparag">
                  No matter where you are, on the way to work or waiting for
                  someone, you can control your home energy consumption and make
                  a decision to optimize it. Just login to your account on your
                  smartphone and the report is ready for you.
                </p>
                <p className="testparag"></p>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInRight order-1 order-lg-2 pb-5">
                <img
                  src="assets/img/about-extra-2.svg"
                  className="img-fluid"
                  alt="about"
                />
              </div>

              <div className="col-lg-6 wow fadeInLeft my-auto order-2 order-lg-1">
                <h4 className="testh">
                  A user-friendly dashboard is what we offer!
                </h4>
                <p className="testparag"></p>
                <p className="testparag">
                  There is no need to be a technician to analyze your home
                  energy consumption. Just login to your dashboard, choose the
                  items you want to check, select a date, and the report is
                  visualized in the simplest way for you.
                </p>
                <p className="testparag"></p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
