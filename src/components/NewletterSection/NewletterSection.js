import React from "react";
import NewsletterSectionStyle from "./NewsletterSectionStyle";
import SectionTitle from '../Titles/SectionTitle';
import ParagraphTexts from '../ParagraphTexts/ParagraphTexts';

class newsletterSection extends React.Component {
  render() {
    return (
      <NewsletterSectionStyle>
        <div className="container">
          <div className="newsletter__wrapper">
            <SectionTitle className="newsletter__title">
              Join Newsletter
            </SectionTitle>
            <ParagraphTexts className="newsletter__subtitle">
              Get regualr updates every week
            </ParagraphTexts>
            <form className="newsletter__form">
              <input type="email" placeholder="Enter your email"/>
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      </NewsletterSectionStyle>
    )
  }
}

export default newsletterSection;