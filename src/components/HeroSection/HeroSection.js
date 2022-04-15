import React from "react";

import HeroTitle from "../Titles/HeroTitles";
import ParagraphText from "../ParagraphTexts/ParagraphTexts";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import HeroSectionStyles from "./HeroSectionStyles";
import heroImg from '../../assets/images/hero.png';

class HeroSection extends React.Component {

  render() {
    return (
      <HeroSectionStyles id="home">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__info">
              <HeroTitle className="hero__title">
                a click of artistic joy
              </HeroTitle>
              <ParagraphText className="hero__desc">
                Because every picture tells a story, let us help you tell yours.
              </ParagraphText>
              <PrimaryButton className="cta">
                Get In Touch
              </PrimaryButton>
            </div>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </HeroSectionStyles>
    )
  }
}

export default HeroSection;