import React from "react";

import AboutSectionStyle from "./AboutSectionStyle";
import ParagraphTexts from '../ParagraphTexts/ParagraphTexts';
import SectionTitle from '../Titles/SectionTitle';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import aboutImg from '../../assets/images/about.png';

class AboutSection extends React.Component {
  render() {
    return (
      <AboutSectionStyle>
        <div className="container">
          <div className="about__wrapper">
            <div className="about__img">
              <img src={aboutImg} alt="Artistic" />
            </div>
            <div className="anput__info">
              <ParagraphTexts className="about__subtitle">
                Who are we
              </ParagraphTexts>
              <SectionTitle className="about__title">
                Capturing life as it happens
              </SectionTitle>
              <ParagraphTexts className="about__desc">
                “Artistic” is a studio of some passionate photographer. Our Goal
                is to capture your experience.
              </ParagraphTexts>
              <PrimaryButton>
                Get In Touch
              </PrimaryButton>
            </div>
          </div>
        </div>
      </AboutSectionStyle>
    )
  }
}

export default AboutSection;