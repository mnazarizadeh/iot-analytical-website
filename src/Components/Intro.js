import React, { Component } from 'react';


class Intro extends Component {
    
    render() {
        return (
            <React.Fragment>

                <section id="intro" className="clearfix">
                    <div className="container">

                        <div className="intro-img">
                            <img src="assets/img/intro-img.svg" alt="intro" className="img-fluid" />
                        </div>

                        <div className="intro-info">
                            <h2>We provide<br/>recommendations<br/>for your smart home!</h2>
                            <div>
                            <a href="/" className="btn-get-started scrollto">Order Now!</a>
                            <a href="#about" className="btn-services scrollto">Features</a>
                            </div>
                        </div>

                    </div>
                </section>
                
            </React.Fragment>
        )
    }
}

export default Intro;
