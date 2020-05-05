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
import SweetAlert from "react-bootstrap-sweetalert";
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
      Quantity: 0,
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
    } else {
        document.getElementById("user-validation").textContent =
            "Please fill empty fields!";
    }

    if (this.state.iUsername === "") {
      document.querySelector('.name').classList.add('empty-input-alert');
      document.querySelector('.name-icon').classList.add('empty-input-alert');
    }
    if (this.state.Phone === "") {
      document.querySelector('.phone').classList.add('empty-input-alert');
      document.querySelector('.phone-icon').classList.add('empty-input-alert');
    }
    if (this.state.Mail === "") {
      document.querySelector('.email').classList.add('empty-input-alert');
      document.querySelector('.email-icon').classList.add('empty-input-alert');
    }
  };

  onInputChangedQuantity = (e) => {
      const newValues = getValueFromEvent(e);
      this.setState({
          Quantity: newValues.Quantity,
      });
      document.getElementById("price").innerText = newValues.Quantity * 299 +'$'
  };

  onInputChangedUsername = (e) => {
    document.getElementById("user-validation").textContent="";
    document.querySelector('.name').classList.remove('empty-input-alert');
    document.querySelector('.name-icon').classList.remove('empty-input-alert');
    const newValues = getValueFromEvent(e);
    this.setState({
      iUsername: newValues.username,
    });
  };
  onInputChangedPhone = (e) => {
    document.getElementById("user-validation").textContent="";
    document.querySelector('.phone').classList.remove('empty-input-alert');
    document.querySelector('.phone-icon').classList.remove('empty-input-alert');
    const newValues = getValueFromEvent(e);

    this.setState({
      Phone: newValues.phone,
    });
  };
  onInputChangedMail = (e) => {
    document.getElementById("user-validation").textContent="";
    document.querySelector('.email').classList.remove('empty-input-alert');
    document.querySelector('.email-icon').classList.remove('empty-input-alert');
    const newValues = getValueFromEvent(e);

    this.setState({
      Mail: newValues.email,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SweetAlert
          success
          show={this.state.show}
          title="Congratulations!"
          onConfirm={() => this.setState({ show: false })}
        >
          Your order has been submitted, We will contact you soon.
        </SweetAlert>
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
                  <img src="./assets/img/product.png" alt="product-pic" />
                </div>
                <table className="table table-image mb-4">
                  <thead>
                    <tr>
                      <th scope="col" style={{ color: "black" }}>
                        Product
                      </th>
                      <th scope="col" style={{ color: "black" }}>
                        Price
                      </th>
                      <th scope="col" style={{ color: "black" }}>
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ color: "black" }}>IoT Analytical Unit</td>
                      <td id="price" style={{ color: "black" }}>299$</td>
                      <td style={{ color: "black" }}>
                        <input
                          id="quantity"
                          name="Quantity"
                          type="number"
                          className="form-control text-center quantity"
                          defaultValue="1"
                          min="1"
                          max="20"
                          onChange={(e) => this.onInputChangedQuantity(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div id="user-validation"/>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="name-icon">
                      <i className="fa fa-user"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox name"
                    name="username"
                    placeholder="Fullname"
                    onChange={(e) => this.onInputChangedUsername(e)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText color="secondary" className="phone-icon">
                      <i className="fa fa-phone"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox phone"
                    name="phone"
                    placeholder="Phone number"
                    type="text"
                    onChange={(e) => this.onInputChangedPhone(e)}
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText color="secondary" className="email-icon">
                      <i className="fa fa-envelope colori"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="inputbox email"
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
              <h2>Analytics Solution for Smart Homes</h2>
              <div>
                <button
                  className="btn-get-started animated infinite pulse"
                  onClick={() => this.openModal()}
                >
                  Order Now!
                </button>
                <button
                  className="btn-services"
                  onClick={() => this.props.history.push(`/Dashboard`)}
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="intro-bottom" className="clearfix"/>
      </React.Fragment>
    );
  }
}

export default withRouter(Intro);
