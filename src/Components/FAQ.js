import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="faq">
          <div className="container">
            <div className="section-header">
              <h3 className="faq-header">FAQ</h3>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      How can IoT analytical be installed?
                    </h2>
                  </div>
                </button>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    First, you have to install the device, connect it to a power
                    source. Then, you should connect to your home’s network
                    either by wired connection or wireless. Finally, install the
                    software on your hub and connect it to the device. We can
                    also install them for free if you purchase 10 units or more.
                    For more information contact support.
                  </div>
                </div>
              </div>
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      Can I customize IoT analytical for my customers?
                    </h2>
                  </div>
                </button>

                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    Yes. We have custom plans for home and apartment developers
                    to customize IoT analytical based on their needs. Contact us
                    for more information.
                  </div>
                </div>
              </div>
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                >
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      What if my internet connection has been lost?
                    </h2>
                  </div>
                </button>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    IoT analytical works independent of internet connection and
                    stores data locally. Whenever your internet connection is
                    lost, the system identifies it and acts accordingly.
                  </div>
                </div>
              </div>
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                >
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      How does my privacy protect?
                    </h2>
                  </div>
                </button>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    All collected data is encrypted through a P2P system with
                    military-grade protection levels. You can also disable the
                    cloud back-up option on which case your data will be
                    available locally only.
                  </div>
                </div>
              </div>
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                >
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      Is IoT analytical GDPR or/and CCPA compatible?
                    </h2>
                  </div>
                </button>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    We are fully compatible with all applicable laws and
                    regulations including GDPR and CCPA. Our cloud
                    infrastructure is based in EU and all reasonable efforts
                    have been taken to prevent unauthorized access.
                  </div>
                </div>
              </div>
              <div className="card-faq">
                <button
                    className="btn btn-link btn-faq collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                >
                  <div className="card-header" id="headingSix">
                    <h2 className="mb-0 faq-question">
                      <h5>Q.</h5>
                      Do you have a warranty?
                    </h2>
                  </div>
                </button>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <h5>A.</h5>
                    All devices come with a limited 1-year warranty which covers
                    reasonable usage. In case your device malfunction within 1
                    month from the date of purchase, we will replace it with a
                    new one for free.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FAQ;
