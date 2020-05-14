import React, { Component } from "react";
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
// import Form from './Form';
import SweetAlert from "react-bootstrap-sweetalert";
import { getValueFromEvent } from "../util/clientUtils";
import TextField from '@material-ui/core/TextField';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.price = 299;
    this.state = {
        modal: false,
        show: false,
        name: "",
        country: "",
        address: "",
        phone: "",
        email: "",
        quantity: 1,
        error: {
            name: false,
            country: false,
            address: false,
            phone: false,
            email: false,
        },
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
        country: "",
        address: "",
        phone: "",
        email: "",
        quantity: 1,
        error: {
            name: false,
            country: false,
            address: false,
            phone: false,
            email: false,
        },
    }));
  };

    validate = () => {
        const emailRegex = /^([\w.+]+)([^\W])(@)([\w]{3,})(\.[\w]{2,})+$/;
        const phoneRegex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
        let newError = this.state.error;
        if (this.state.name === '') {
            newError = {...newError, name: true};
        }
        if (this.state.country === '') {
            newError = {...newError, country: true};
        }
        if (this.state.address === '') {
            newError = {...newError, address: true};
        }
        if (this.state.phone === '' || !phoneRegex.test(this.state.phone)) {
            newError = {...newError, phone: true};
        }
        if (this.state.email === '' || !emailRegex.test(this.state.email)) {
            newError = {...newError, email: true};
        }
        this.setState({error: newError});
        return !(newError.name || newError.country || newError.address || newError.phone || newError.email);
    };

  submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      data.append('price', this.state.quantity * this.price);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
              form.reset();
              this.setState((prevState) => ({
                  show: !prevState.show,
              }));
          }
      };
    if (this.validate()) {
        xhr.send(data);
    } else {
        xhr.abort();
        document.getElementById("user-validation").textContent =
            "Please fill out empty fields!";
    }
  }

  decrease = () => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1});
      document.getElementById("price").innerText = (this.state.quantity - 1) * this.price +'$'
    }
  };

  increase = () => {
      this.setState({ quantity: this.state.quantity + 1 });
      document.getElementById("price").innerText = (this.state.quantity + 1) * this.price +'$'
  };

    onInputChangedName = (e) => {
        document.getElementById("user-validation").textContent="";
        const newValues = getValueFromEvent(e);
        const newError = {...this.state.error, name: false};
        this.setState({
            name: newValues.name,
            error: newError,
        });
    };
    onInputChangedCountry = (e) => {
        document.getElementById("user-validation").textContent="";
        const newError = {...this.state.error, country: false};
        const newValues = getValueFromEvent(e);
        this.setState({
            country: newValues.country,
            error: newError,
        });
    };
    onInputChangedAddress = (e) => {
        document.getElementById("user-validation").textContent="";
        const newError = {...this.state.error, address: false};
        const newValues = getValueFromEvent(e);
        this.setState({
            address: newValues.address,
            error: newError,
        });
    };
    onInputChangedPhone = (e) => {
        document.getElementById("user-validation").textContent="";
        const newError = {...this.state.error, phone: false};
        const newValues = getValueFromEvent(e);
        this.setState({
            phone: newValues.phone,
            error: newError,
        });
    };
    onInputChangedEmail = (e) => {
        document.getElementById("user-validation").textContent="";
        const newError = {...this.state.error, email: false};
        const newValues = getValueFromEvent(e);
        this.setState({
            email: newValues.email,
            error: newError,
        });
    };

  render() {
      return (
      <React.Fragment>
        <SweetAlert
          success
          show={this.state.show}
          title="Congratulations!"
          onConfirm={() => {this.closeModal()}}
        >
          Your order has been submitted, We will contact you soon.
        </SweetAlert>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={() => this.openModal()}
            className="iotModal order-modal"
          >
            <form noValidate autoComplete="off"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/mayjzzap"
                  method="post">
            <ModalBody>
              <div className="row">
                  <div className="col-md-6">
                    <div className="product-pic-modal">
                      <img src="./assets/img/product.png" alt="product pic" />
                    </div>
                    <table className="table table-image">
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
                          <td>
                            <div className="number-input">
                              <button onClick={this.decrease} className="minus" type="button"/>
                              <input className="quantity" name="quantity" value={this.state.quantity} type="number"/>
                              <button onClick={this.increase} className="plus" type="button"/>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <div id="user-validation"/>
                    <div className="order-form">
                        <TextField required id="standard-basic" label="Email" name="email" type="email" fullWidth
                                   onChange={(e) => this.onInputChangedEmail(e)}
                                   className="text-field email"
                                   error={this.state.error.email}/>
                        <TextField required id="standard-basic" label="Name" name="name" type="text" fullWidth
                                   onChange={(e) => this.onInputChangedName(e)}
                                   className="text-field name"
                                   error={this.state.error.name}/>
                        <TextField required id="standard-basic" label="Country" name="country" type="text" fullWidth
                                   helperText="* Free shipping to UAE, Oman, Iran, and Kuwait is now available"
                                   onChange={(e) => this.onInputChangedCountry(e)}
                                   className="text-field country"
                                   error={this.state.error.country}/>
                        <TextField required id="standard-basic" label="Address" name="address" type="text" fullWidth
                                   onChange={(e) => this.onInputChangedAddress(e)}
                                   className="text-field address"
                                   error={this.state.error.address}/>
                        <TextField required id="standard-basic" label="Phone" name="phone" type="phone" fullWidth
                                   onChange={(e) => this.onInputChangedPhone(e)}
                                   className="text-field phone"
                                   error={this.state.error.phone}/>
                    </div>
                    <div className="button-div"></div>
                  </div>
              </div>
            </ModalBody>
            <ModalFooter>
                <Button type="submit" className="btn-custom-iot">
                    Submit
                </Button>
                <Button type="button" className="btn-custom-cancel" onClick = {() => this.closeModal()}>
                    Cancel
                </Button>
            </ModalFooter>
          </form>
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
                <button className="btn-services" onClick={() => this.props.history.push(`/Dashboard`)}>
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
