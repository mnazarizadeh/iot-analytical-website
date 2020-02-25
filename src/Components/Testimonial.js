import React, { Component } from 'react';

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

                          
                    
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt=".." />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                </div>
                    
                            
                            

                            </div>

                        </div>
                       


                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Testimonial;
