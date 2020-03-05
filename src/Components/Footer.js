/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import MapGL from "react-map-gl";
import { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYXNhZG91Z2hpIiwiYSI6ImNrN2RrYnhkcTBha3Qzbm80N2JuNGgxNmoifQ._zSnm6xtQ1XLswCWkCdLgA";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 35.7132,
        longitude: 51.42,
        zoom: 17,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3>IoT Analytical</h3>
                  <p>
                      IoT Analytical helps life gets better and more <br/>
                      convenient with smart homes. Optimize your <br/>
                      energy consumption and make a bright future <br/>
                      for the next generations with us.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    Unit 6, No 32, Azar Shahr St <br />
                    Iranshahr St, Karim Khan Zand Blvd
                    <br />
                    Tehran, IRAN <br />
                    <strong>Phone:</strong> +98 21 88690360
                    <br />
                    <strong>Email:</strong> info@iot-analytical.com
                    <br />
                  </p>

                  <div className="social-links">
                    <a
                      href="https://twitter.com/IoTAnalytical"
                      className="twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="mailto:info@iot-analytical.com?Subject=Need to be smarter"
                      className="Email"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/iotanalytical"
                      className="linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <h4>Location</h4>
                  <MapGL
                    {...this.state.viewport}
                    width="100%"
                    height="80%"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                  >
                    <Marker
                      latitude={this.state.viewport.latitude}
                      longitude={this.state.viewport.longitude}
                    >
                      <img
                        id="location-image"
                        src="./assets/img/marker.svg"
                        alt="location"
                      />
                    </Marker>
                  </MapGL>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              Copyright &copy; {new Date().getFullYear()} <strong>IoT Analytical</strong>. All Rights Reserved.
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
