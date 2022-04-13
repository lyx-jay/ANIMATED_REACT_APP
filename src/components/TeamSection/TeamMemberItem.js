import React from "react";


import styled from 'styled-components';
import ParagraphText from "../ParagraphTexts/ParagraphTexts";

const TeamMemberItemStyle = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      border-radius: 18px;
    }
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

class TeamMemberItem extends React.Component {
  render() {
    const {img, name, title} = this.props;
    return (
      <TeamMemberItemStyle>
         <div className="teamMember__img">
           <img src={img} alt="" />
         </div>
         <ParagraphText className="teamMember__name">{name}</ParagraphText>
         <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
      </TeamMemberItemStyle>
    )
  }
}

export default TeamMemberItem;