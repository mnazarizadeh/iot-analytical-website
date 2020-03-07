import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      lat: 35.7132,
      lng: 51.42,
      zoom: 17
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3>IoT Analytical</h3>
                  <p>
                    IoT Analytical helps life gets better and more <br />
                    convenient with smart homes. Optimize your <br />
                    energy consumption and make a bright future <br />
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="mailto:info@iot-analytical.com?Subject=Need to be smarter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Email"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/iotanalytical"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <h4>Location</h4>
                  <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>IoT Analytical Office</Popup>
                    </Marker>
                  </Map>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <strong>IoT Analytical</strong>. All Rights Reserved.
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
