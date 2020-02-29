import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
                                    dots={true}
                                    items={1}
                                >
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt=".." />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                                            suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                    </div>
                                    <div className="testimonial-item">
                                        <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </p>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }

}

export default Testimonial;
