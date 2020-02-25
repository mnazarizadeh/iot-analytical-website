import React, { Component } from 'react';


class Navbar extends Component {
    
    render() {
        return (
            <React.Fragment>

                <header id="header" className="fixed-top">
                    <div className="container">

                        <div className="logo float-left">
                            {/* Uncomment below if you prefer to use an image logo  */}
                            <h2 className="text-light"><a href="#header"><span>IOT Analytical</span></a></h2>
                            {/* <a href="#intro" className="scrollto"><img src="../assets/img/logo.png"
                            alt="logo" className="img-fluid"/></a> */}
                        </div>

                        <nav className="main-nav float-right d-none d-lg-block">
                            <ul>
                                
                                <li className="active"><a href="#intro">Home</a></li>
                                <li><a href="#about">Features</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="/" id="btn-login">Log in</a></li>
                               
                            </ul>
                            
                        </nav> 
                    </div>
                </header>
                
            </React.Fragment>
        )
    }
}

export default Navbar;
