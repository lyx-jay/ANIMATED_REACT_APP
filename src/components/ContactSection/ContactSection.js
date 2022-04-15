import React from "react";
import ContactSectionStyle from "./ContactSectionStyle";
import SectionTitle from '../Titles/SectionTitle';
import ParagraphTexts from '../ParagraphTexts/ParagraphTexts';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import FormField from "./FormField";


class ContactSection extends React.Component {
  render() {
    return (
      <ContactSectionStyle id="contact">
         <div className="container">
           <div className="contact__wrapper">
              <div className="contact__info">
                <SectionTitle className="contact__title">Get In Touch</SectionTitle>
                <ParagraphTexts className="contact__subtitle">We would love to hear from you.</ParagraphTexts>
              </div>
              <form className="contact__form">
                <FormField 
                  className="contact__field--fullWidth"
                  type="text"
                  label="Name"
                  name="name"
                  id="name"
                  required/>
                <FormField 
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  required/>
                <FormField 
                  type="text"
                  label="Subject"
                  name="subject"
                  id="subject"
                  required/>
                <FormField 
                  className="contact__field--fullWidth"
                  label="message"
                  id="message"
                  name="message"
                  rows="6"
                  />
                <PrimaryButton
                  type="submit"
                  buttonType="button"
                  className="contact__submit">
                  Submit
                </PrimaryButton>
              </form>
           </div>
         </div>
      </ContactSectionStyle>
    )
  }
}

export default ContactSection;