import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="team">
          <div className="container-fluid">
            <div className="section-header">
              <h3>Team</h3>
              <p></p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img
                      src="assets/img/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Mohammad Nazarizadeh</h4>
                        <span>CEO</span>
                        <div className="social">
                          <a href="mailto:m.nazarizadeh@gmail.com?subject=Contact IA Team">
                            <i className="fa fa-google"/>
                          </a>
                          <a href="mailto:mnazarizadeh@iot-analytical.com?subject=Contact IA Team">
                            <i className="fa fa-envelope"/>
                          </a>
                          <a href="https://www.linkedin.com/in/mnazarizadeh" target="_blank">
                            <i className="fa fa-linkedin"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                    className="col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay="0.2s"
                >
                    <div className="member">
                        <img
                            src="assets/img/team-2.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="member-info">
                            <div className="member-info-content">
                                <h4>Maedeh Amiri</h4>
                                <span>Software Engineer</span>
                                <div className="social">
                                    <a href="mailto:maedehamiri@gmail.com?subject=Contact IA Team">
                                        <i className="fa fa-google"/>
                                    </a>
                                    <a href="mailto:mamiri@iot-analytical.com?subject=Contact IA Team">
                                        <i className="fa fa-envelope"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/maedeh-amiri-78829b108" target="_blank">
                                        <i className="fa fa-linkedin"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>

                <div
                  className="col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="member">
                    <img
                      src="assets/img/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Ali Sadoughi</h4>
                        <span>Hardware & Material Engineer</span>
                        <div className="social">
                          <a href="mailto:asadoughi1990@gmail.com?subject=Contact IA Team">
                            <i className="fa fa-google"/>
                          </a>
                          <a href="mailto:asadoughi@iot-analytical.com?subject=Contact IA Team">
                            <i className="fa fa-envelope"/>
                          </a>
                          <a href="https://www.linkedin.com/in/ali-sadoughi-62a8651a3" target="_blank">
                            <i className="fa fa-linkedin"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="member">
                    <img
                      src="assets/img/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Marsa Mousavi</h4>
                        <span>Sales and Marketing Expert</span>
                        <div className="social">
                          <a href="mailto:marsa.mousavi@gmail.com?subject=Contact IA Team">
                            <i className="fa fa-google"/>
                          </a>
                          <a href="mailto:mmousavi@iot-analytical.com?subject=Contact IA Team">
                            <i className="fa fa-envelope"/>
                          </a>
                          <a href="https://www.linkedin.com/in/marsamousavi">
                            <i className="fa fa-linkedin"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="member">
                    <img
                      src="assets/img/team-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>
                          Hamed
                          <br />
                          Nazarizadeh
                        </h4>
                        <span>Business Development Manager</span>
                        <div className="social">
                          <a href="mailto:Hamed.nazarizadehh@gmail.com?subject=Contact IA Team">
                            <i className="fa fa-google"/>
                          </a>
                          <a href="mailto:hnazarizadeh@iot-analytical.com?subject=Contact IA Team">
                            <i className="fa fa-envelope"/>
                          </a>
                          <a href="http://linkedin.com/in/hamed-nazari-3b3a736b">
                            <i className="fa fa-linkedin"/>
                          </a>
                        </div>
                      </div>
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

export default Team;
