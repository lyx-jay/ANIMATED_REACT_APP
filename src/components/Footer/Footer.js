import React from "react";
import ParagraphText from "../ParagraphTexts/ParagraphTexts";
import FooterStyle from "./FooterStyle";
import Logo from "../Logo/Logo";

class Footer extends React.Component {
  render() {
    return (
      <FooterStyle>
         <div className="container">
           <div className="footer__wrapper">
            <Logo className="footer__logo"/>
             <ParagraphText className="footer__desc">
             “Artistic” is a studio of some passionate photographer. Our Goal is
            to capture your experience.
             </ParagraphText>
             <div className="footer__links">
               <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">Services</a></li>
                 <li><a href="/">About</a></li>
                 <li><a href="/">Contact</a></li>
               </ul>
             </div>
             <ParagraphText className="footer__copyright">
             © Artistic Creative {new Date().getFullYear()}. All rights reserved
             </ParagraphText>
           </div>
         </div>
      </FooterStyle>
    )
  }
}

export default Footer;