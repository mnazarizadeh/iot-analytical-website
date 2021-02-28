import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  // ModalHeader,
  ModalBody,
  ModalFooter,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  // Input,
} from "reactstrap";
import SweetAlert from 'react-bootstrap-sweetalert';
import { getValueFromEvent } from "../util/clientUtils";
import TextField from '@material-ui/core/TextField';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 35.713043,
      lng: 51.419675,
      zoom: 17,
      modal: false,
      show: false,
      name: "",
      email: "",
      org: "",
      error: false,
    };
  }

  openModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  closeModal = () => {
      this.setState(() => ({
          modal: false,
          show: false,
          name: "",
          email: "",
          org: "",
          error: false,
      }));
  };

  CheckSubmit = () => {
    if (this.state.name !== "" && this.state.email !== "" && this.state.org !== "") {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    } else {
        this.setState(() => ({
            error: true,
        }));
        document.getElementById("user-validation").textContent =
            "Please fill out empty fields!";
    }
  };
  onInputChangedName = (e) => {
    document.getElementById("user-validation").textContent = "";
    const newValues = getValueFromEvent(e);
    this.setState({
      name: newValues.name,
    });
  };

  onInputChangedEmail = (e) => {
    document.getElementById("user-validation").textContent = "";
    const newValues = getValueFromEvent(e);

    this.setState({
      email: newValues.email,
    });
  };

  onInputChangedOrg = (e) => {
    document.getElementById("user-validation").textContent = "";
    const newValues = getValueFromEvent(e);
    this.setState({
      org: newValues.org,
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <SweetAlert
          success
          show={this.state.show}
          title="Thank You!"
          onConfirm={() => this.closeModal()}
        >
          Your Press Kit will be emailed to you soon.
        </SweetAlert>
        
        <footer id="footer">
          <div>
            <Modal
              id="modal-dialog"
              isOpen={this.state.modal}
              toggle={() => this.openModal()}
              className="iotModal"
            >
              <ModalBody>
                <div id="user-validation"/>
                <div>
                    <TextField required fullWidth id="standard-basic" label="Name" name="name"
                               onChange={(e) => this.onInputChangedName(e)}
                               className="text-field name"
                               error={this.state.error && this.state.name === ""}/>
                    <TextField required fullWidth id="standard-basic" label="Email" name="email"
                               onChange={(e) => this.onInputChangedEmail(e)}
                               className="text-field email"
                               error={this.state.error && this.state.email === ""}/>
                    <TextField required fullWidth id="standard-basic" label="Organization" name="org"
                               onChange={(e) => this.onInputChangedOrg(e)}
                               className="text-field org"
                               error={this.state.error && this.state.org === ""}/>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="btn-custom-iot" onClick={() => this.CheckSubmit()}>
                  Submit
                </Button>
                <Button type="button" className="btn-custom-cancel" onClick = {() => this.closeModal()}>
                    Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>

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
                  <a
                    href="https://www.producthunt.com/posts/iot-analytical?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-iot-analytical"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mt-3"
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=194950&theme=light"
                      alt="IoT Analytical - Analytics Solution for Smart Homes | Product Hunt Embed"
                      width="250px"
                      height="54px"
                    />
                  </a>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    Unit 6, No 32, Azar Shahr St <br />
                    Iranshahr St, Karim Khan Zand Blvd
                    <br />
                    Tehran, IRAN <br />
                    <strong>P. Code:</strong> 1584654917
                    <br />
                    <strong>Email:</strong> info@iot-analytical.com
                    <br />
                    <a
                      className="press-kit"
                      onClick={() => this.openModal()}
                    >
                      Get Press Kit
                    </a>
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
              &copy; {new Date().getFullYear()}{" "}
              <strong> IoT Analytical </strong>. All Rights Reserved.
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(Footer);
