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

class Intro extends Component {
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
                    placeholder="username"
                    onChange={e => this.onInputChangedUsername(e)}
                  />
                </InputGroup>
                <br />
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
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button id="btn-login" onClick={() => this.CheckLogin()}>
                Log in
              </Button>{" "}
              <Button id="btn-login" onClick={() => this.openModal()}>
                Exit
              </Button>
            </ModalFooter>
          </Modal>
        </div>
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
                <button
                  className="btn-get-started animated infinite pulse"
                  onClick={() => this.openModal()}
                >
                  Preorder
                </button>
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

export default withRouter(Intro);
