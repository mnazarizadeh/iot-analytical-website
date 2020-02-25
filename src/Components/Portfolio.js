import React, { Component } from 'react';

class Portfolio extends Component {
    
    render() {
        return (
            <React.Fragment>

                <section id="portfolio">
                    <div className="container">

                        <header className="section-header">
                            <h3 className="section-title">Our Portfolio</h3>
                        </header>
                        <div className="card-columns">
                            <div className="card">
                                <img src="assets/img/portfolio/app1.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="card p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </div>
                            <div className="card">
                                <img src="assets/img/portfolio/card2.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="card">
                                <img src="assets/img/portfolio/web3.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card bg-primary text-white text-center p-3">
                                <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer className="blockquote-footer text-white">
                                    <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </div>
                            <div className="card">
                                <img src="assets/img/portfolio/app3.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="card">
                                <img src="assets/img/portfolio/app2.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="card p-3 text-right">
                                <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                                </blockquote>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

            </React.Fragment>
        )    
    }
}

export default Portfolio;
