import React from 'react';

import "./assets/lib/font-awesome/css/font-awesome.min.css";
import "./assets/lib/ionicons/css/ionicons.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/lightbox/css/lightbox.min.css";
import './assets/css/style.css';

import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Features from './Components/Features';
import WhyUs from './Components/WhyUs';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
     <React.Fragment>

        <Navbar />
        <Intro /> 
        <Features />
        <WhyUs />
        <Portfolio />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />

     </React.Fragment>
  );
}

export default App;
