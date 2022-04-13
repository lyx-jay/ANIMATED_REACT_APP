import React, { Component } from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ServiceSection from '../components/ServicesSection/ServiceSection';
import AboutSection from '../components/AboutSection/AboutSection';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <HeroSection />
        <ServiceSection />
        <AboutSection />
      </>
    )
  }
}
