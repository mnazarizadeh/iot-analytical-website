import React, { Component } from "react";
import { WOW } from "wowjs";

class Features extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
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
              <p></p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <p className="testparag">
                  IoT Analytical enhances, empowers, and helps maintain smart
                  home solutions. Is designed in a way that all relevant data
                  regarding each part of smart solution is collected, stored,
                  and process automatically. The user can easily access water,
                  gas, and electricity consumption and receive live diagnosis
                  analysis. IoT Analytical contributes significantly to the
                  maintenance of smart homes and acts as a diagnosis tool. It
                  also provides suggestions for reducing consumption and thus,
                  helps to save the environment.
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
                      Whether your smart home solution uses Android or Linux,
                      IoT analytical can be easily installed through the use of
                      its restful API. Hence, it can be easily installed on
                      almost every smart home out there.
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
                      All the collected data is served through mobile, web, and
                      hub interface. The data is processed and can be accessed
                      in a variety of ways. Comparison feature is also available
                      to see the difference of usage in various time periods.
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
                      IoT Analytical utilizes AI alongside big data to offer the
                      most efficient usage behaviour. In time, the system also
                      learns from its past and enhances its ability to offer
                      better recommendations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight my-auto pb-5">
                <img
                  src="assets/img/device_panel.png"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInLeft pb-4">
                <img
                  id="phonepng"
                  src="assets/img/mobile_interface.png"
                  className="rounded mx-auto d-block"
                  alt="about"
                />
              </div>
              <div className="col-lg-6 wow fadeInRight my-auto ">
                <h4 className="testh">User-friendly dashboard</h4>
                <p className="testparag"></p>
                <p className="description">
                  IoT analytical application is available on Android, iOS, and
                  web. The household owner can access it from anywhere, whenever
                  he or she wants. The dashboard is designed to be as simple as
                  possible.
                </p>
                <p className="testparag"></p>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInRight order-1 order-lg-2 pb-5">
                <img
                  src="assets/img/feature3.png"
                  className="img-fluid"
                  alt="about"
                />
              </div>

              <div className="col-lg-6 wow fadeInLeft my-auto order-2 order-lg-1">
                <h4 className="testh">No hidden costs</h4>
                <p className="testparag"></p>
                <p className="description">
                  all features available in IoT analytical is available for
                  one-time fee payment. No subscription required. No hidden
                  cost, no bull*hit!
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
