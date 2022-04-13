import React from "react";
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team3 from '../../assets/images/team3.png';
import TeamSectionStyle from "./TeamSectionStyle";
import ParagraphTexts from '../ParagraphTexts/ParagraphTexts';
import SectionTitle from "../Titles/SectionTitle";
import TeamMemberItem from "./TeamMemberItem";

class TeamSection extends React.Component {
  render() {
    return (
      <TeamSectionStyle>
         <div className="container">
           <div className="team__wrapper">
             <div className="team__info">
               <ParagraphTexts className="team__subtitle">
                  Team Members
               </ParagraphTexts>
               <SectionTitle className="team__title">
               The best team available
               </SectionTitle>
             </div>
             <div className="team__members">
              <TeamMemberItem img={team1} name="Rasu" title="Photo Editor"/>
              <TeamMemberItem img={team2} name="Shaif Arfan" title="Photographer"/>
              <TeamMemberItem img={team3} name="Ayan Bilai" title="Photographer"/>
             </div>
           </div>
         </div>
      </TeamSectionStyle>
    )
  }
}

export default TeamSection;