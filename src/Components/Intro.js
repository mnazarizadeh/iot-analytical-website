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
  Input,
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
      Phone: "",
      Mail: "",
    };
  }
  openModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  CheckCart = () => {
    if (
      this.state.iUsername !== "" &&
      this.state.Phone !== "" &&
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
  onInputChangedPhone = (e) => {
    const newValues = getValueFromEvent(e);

    this.setState({
      Phone: newValues.Phone,
    });
  };
  onInputChangedMail = (e) => {
    const newValues = getValueFromEvent(e);

    this.setState({
      Mail: newValues.Mail,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SweetAlert
          icon="warning"
          show={this.state.show}
          title="Congratulations"
          text="Your Order has been submitted, We will contact you soon!"
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
              YOUR CART
            </ModalHeader>
            <ModalBody>
              <div>
                <div className="product-pic-modal">
                  <img src="./assets/img/product.jpg" alt="product-pic" />
                </div>
                <table className="table table-image mb-4">
                  <thead>
                    <tr>
                      <th scope="col" style={{color: "black"}}>Product</th>
                      <th scope="col" style={{color: "black"}}>Price</th>
                      <th scope="col" style={{color: "black"}}>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{color: "black"}}>IoT Analytical Device</td>
                      <td style={{color: "black"}}>299$</td>
                      <td style={{color: "black"}}>
                        <input
                          type="number"
                          className="form-control text-center quantity"
                          defaultValue="1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

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
                      <i className="fa fa-phone colori"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox"
                    name="phone"
                    placeholder="Phone number"
                    type="text"
                    onChange={(e) => this.onInputChangedPhone(e)}
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
                onClick={() => this.CheckCart()}
              >
                Submit
              </Button>{" "}
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
                Analytics Solution for Smart Homes
              </h2>
              <div>
                <button
                  className="btn-get-started animated infinite pulse"
                  onClick={() => this.openModal()}
                >
                  Order Now!
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
