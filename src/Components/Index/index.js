import React, { Component } from 'react';
import Home from './../Home';
import About from './../About';
import Work from './../Work';
import Footer from './../Footer';
import SocialMedia from './../SocialMedia';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
