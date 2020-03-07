import React, { Component } from "react";
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
  Input
} from "reactstrap";
import SweetAlert from "sweetalert2-react";
import { getValueFromEvent } from "../util/clientUtils";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      show: false,
      iUsername: "",
      Password: ""
    };
  }
  openModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  CheckLogin = () => {
    if (
      this.state.iUsername.toLowerCase() === "ali" &&
      this.state.Password === "sa123456"
    ) {
      this.props.history.push(`/Dashboard`);
    } else {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
  };
  onInputChangedUsername = e => {
    const newValues = getValueFromEvent(e);
    this.setState({
      iUsername: newValues.Username
    });
  };
  onInputChangedPassword = e => {
    const newValues = getValueFromEvent(e);

    this.setState({
      Password: newValues.Password
    });
  };
  render() {
    return (
      <React.Fragment>
        <SweetAlert
          icon="warning"
          show={this.state.show}
          title="Log in Failed"
          text="Your username or password is incorrect, Please Try Again!"
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
              Log in
            </ModalHeader>
            <ModalBody>
              <div className="container">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user colori"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox"
                    name="Username"
                    placeholder="username"
                    onChange={e => this.onInputChangedUsername(e)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText color="secondary">
                      <i className="fa fa-lock colori"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox"
                    name="Password"
                    placeholder="Password"
                    type="password"
                    onChange={e => this.onInputChangedPassword(e)}
                  />
                </InputGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="btn-custom-iot"
                onClick={() => this.CheckLogin()}
              >
                Log in
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </div>

        <nav className="navbar navbar-expand-lg custom-toggler fixed-top navbar-site">
          <div className="container">
            <a className="navbar-brand" href="/">
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
                  <a id="homelink" className="nav-link" href="#introw">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#video">
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-3" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>

              <button
                className="btn btn-custom-iot my-2 my-sm-0 px-4"
                onClick={() => this.openModal()}
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
