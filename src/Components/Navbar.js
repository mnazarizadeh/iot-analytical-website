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
    if (this.state.iUsername === "Ali" && this.state.Password === "sa123456") {
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
          <Modal isOpen={this.state.modal} toggle={() => this.openModal()}>
            <ModalHeader toggle={() => this.openModal()}>Log in</ModalHeader>
            <ModalBody>
              <div>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="Username"
                    placeholder="username"
                    onChange={e => this.onInputChangedUsername(e)}
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="Password"
                    placeholder="Password"
                    type="password"
                    onChange={e => this.onInputChangedPassword(e)}
                  />
                </InputGroup>
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.CheckLogin()}>
                Log in
              </Button>{" "}
              <Button color="secondary" onClick={() => this.openModal()}>
                Exit
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <h3 id="logo-text">IOT ANALYTICAL</h3>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#intro">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-3" href="#contact">Contact Us</a>
                </li>
              </ul>

              <button className="btn btn-outline-primary bt-md my-2 my-sm-0 px-4"
                onClick={() => this.openModal()}>Log in</button>

            </div>
          </div>
        </nav>

      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);

