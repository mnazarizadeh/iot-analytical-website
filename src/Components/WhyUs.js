import React, { Component } from 'react';

class WhyUs extends Component {
    
    render() {
        return (
            <React.Fragment>

                <section id="why-us" className="wow fadeIn">
                    <div className="container">
                        <header className="section-header">
                        <h3>Why choose us?</h3>
                        <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                        </header>

                        <div className="row row-eq-height justify-content-center">

                        <div className="col-lg-4 mb-4">
                            <div className="card wow bounceInUp">
                                <i className="fa fa-diamond"></i>
                            <div className="card-body">
                                <h5 className="card-title">Corporis dolorem</h5>
                                <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                                <a href="/" className="readmore">Read more </a>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="card wow bounceInUp">
                                <i className="fa fa-language"></i>
                            <div className="card-body">
                                <h5 className="card-title">Voluptates dolores</h5>
                                <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                                <a href="/" className="readmore">Read more </a>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="card wow bounceInUp">
                                <i className="fa fa-object-group"></i>
                            <div className="card-body">
                                <h5 className="card-title">Eum ut aspernatur</h5>
                                <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                                <a href="/" className="readmore">Read more </a>
                            </div>
                            </div>
                        </div>

                        </div>
                                         
                    </div>
                </section>


            </React.Fragment>
        )
    }
}

export default WhyUs;
