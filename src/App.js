import React from "react";

import "./assets/lib/font-awesome/css/font-awesome.min.css";
import "./assets/lib/ionicons/css/ionicons.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/lightbox/css/lightbox.min.css";
import "./assets/css/style.css";

import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Features from "./Components/Features";
import Video from "./Components/Video";
import Testimonial from "./Components/Testimonial";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

class App extends React.Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Intro />
        <Features />
        <Video />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />
        <ScrollToTop />
      </React.Fragment>
    );
  }
}

export default App;
