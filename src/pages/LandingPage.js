import React, { Component } from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ServiceSection from '../components/ServicesSection/ServiceSection';
import AboutSection from '../components/AboutSection/AboutSection';
import TeamSection from '../components/TeamSection/TeamSection';
import NewsletterSection from '../components/NewletterSection/NewletterSection';
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <TeamSection />
        <NewsletterSection />
      </>
    )
  }
}
