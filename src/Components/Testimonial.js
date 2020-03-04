import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <OwlCarousel
                  className="owl-theme"
                  autoplay={true}
                  loop={true}
                  margin={10}
                  nav={false}
                  items={1}
                  autoplayHoverPause={true}
                >
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      className="testimonial-img"
                      alt=".."
                    />
                    <h3>Mahdi Niknia</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p className="testparag">
                      We just finished a new 5th floor building using IoT
                      Analytical devices which make the building smarter. The
                      team completely knows their business and they deliver
                      exactly what they say will deliver on time. All members
                      are responsive and friendly. Professional technicians
                      installed the device in a couple of days and it was ready
                      to use in a short period of time.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Shahab Moradi</h3>
                    <h4>Designer</h4>
                    <p className="testparag">
                      We installed IoT Analytical devices to one of our projects
                      to make a difference for people who care about energy and
                      environment. Our customers claim that it has dramatically
                      changed their consumption pattern for the better. The
                      recommender system helps them use water, gas, and
                      electricity optimal instead of using it during peak hours.
                      Not only is it affordable but also it makes the earth a
                      better place to live by saving energy.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Ramyar Ghandriz</h3>
                    <h4>Freelancer</h4>
                    <p className="testparag">
                      We had a wonderful experience with the IoT Analytical
                      team. We were searching for smart home systems for our
                      latest project and it was not possible to find unit
                      device, on one hand, to control gas, water, and
                      electricity consumption simultaneously, on the other hand,
                      analyze different periods of time usage with the result of
                      a comparative visualized chart. We found all these
                      features in an easy-to-install and an user-friendly device
                      which IoT Analytical represents.
                    </p>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonial;
