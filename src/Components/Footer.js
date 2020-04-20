import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import SweetAlert from "sweetalert2-react";
import { getValueFromEvent } from "../util/clientUtils";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 35.7132,
      lng: 51.42,
      zoom: 17,
      modal: false,
      show: false,
      iUsername: "",
      Mail: ""
    };
  }

  openModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  CheckSubmit = () => {
    if (
      this.state.iUsername !== "" &&
      this.state.Mail !== ""
    ) {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }
  };
  onInputChangedUsername = (e) => {
    const newValues = getValueFromEvent(e);
    this.setState({
      iUsername: newValues.Username,
    });
  };
  
  onInputChangedMail = (e) => {
    const newValues = getValueFromEvent(e);

    this.setState({
      Mail: newValues.Mail,
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
      <SweetAlert
          icon="warning"
          show={this.state.show}
          title="Thank You"
          text="Your Press Kit will be emailed to you soon!"
          onConfirm={() => this.setState({ show: false })}
        />
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={() => this.openModal()}
            className="iotModal"
          >
            <ModalHeader
              className="modal-header-custom"
              toggle={() => this.openModal()}
            >
              Get Press Kit
            </ModalHeader>
            <ModalBody>
              <div>
                
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user colori"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox"
                    name="Username"
                    placeholder="Fullname"
                    onChange={(e) => this.onInputChangedUsername(e)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText color="secondary">
                      <i className="fa fa-envelope colori"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => this.onInputChangedMail(e)}
                  />
                </InputGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="btn-custom-iot"
                onClick={() => this.CheckSubmit()}
              >
                Submit
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </div>
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

                  <button
                  className="btn-pressKit"
                  onClick={() => this.openModal()}
                >
                  Get Press Kit
                </button>

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
                &copy; {new Date().getFullYear()}{" "} <strong> IoT Analytical </strong>. All Rights Reserved.
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(Footer);
