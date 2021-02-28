import React, { Component } from "react";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h3>Contact Us</h3>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="row">
                  <div className="col-md-5 info">
                    <i className="ion-ios-location-outline"/>
                    <p className="testparag">
                      Unit 6, No 32, Azar Shahr St, Iranshahr St, Karim Khan
                      Zand Blvd, Tehran, IRAN
                    </p>
                  </div>
                  <div className="col-md-4 info">
                    <i className="ion-ios-email-outline"/>
                    <p className="testparag">info@iot-analytical.com</p>
                  </div>
                  <div className="col-md-3 info">
                    <i className="ion-social-twitter-outline"/>
                    <p className="testparag">@IoTAnalytical</p>
                  </div>
                </div>

                <div className="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage">
                      Ooops! There was an error.
                  </div>
                  <form
                      onSubmit={this.submitForm}
                      action="https://formspree.io/mgeybdzq"
                      method="post"
                      className="contactForm">
                    <div className="form-row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validation"/>
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="email"
                          className="form-control"
                          name="_replyto"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                          required={true}
                        />
                        <div className="validation"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"/>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      />
                      <div className="validation"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" title="Send Message">
                            Send Message
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                document.getElementById('sendmessage').classList.add('show');
                document.getElementById('errormessage').classList.remove('show');
                //this.setState({ status: "SUCCESS" });
            } else {
                document.getElementById('sendmessage').classList.remove('show');
                document.getElementById('errormessage').classList.add('show');
                //this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

export default Contact;
