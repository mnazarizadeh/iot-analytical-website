import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3>IOT Analytical</h3>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra. Justo
                    eget nada terra videa magna derita valies darta donna mare
                    fermentum iaculis eu non diam phasellus. Scelerisque felis
                    imperdiet proin fermentum leo. Amet volutpat consequat
                    mauris nunc congue.
                  </p>
                </div>

                {/* <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About us</a>
                    </li>
                    <li>
                      <a href="/">Services</a>
                    </li>
                    <li>
                      <a href="/">Terms of service</a>
                    </li>
                    <li>
                      <a href="/">Privacy policy</a>
                    </li>
                  </ul>
                </div> */}

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    Unit 6, No 32, Azar Shahr St <br />
                    Iranshahr St, Karim Khan Zand Blvd
                    <br />
                    Tehran, Iran <br />
                    <strong>Phone:</strong> 021 88690360
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
                    <a href="info@iot-analytical.com" className="Email">
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
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong>IOT Analytical</strong>. All Rights
              Reserved
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
