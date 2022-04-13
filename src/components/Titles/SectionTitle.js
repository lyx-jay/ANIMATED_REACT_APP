import React from "react";
import styled from 'styled-components';
import themeList from '../../data/themeList';
import themeContext from '../../context/themeContext';

const HeroTitleStyles = styled.h3`
  font-size: 4rem;
  color: ${(props) => 
    props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  font-weight: 800;
`;

class SectionTitle extends React.Component {
  render() {
    return (
      <HeroTitleStyles mode={this.context.theme} className={this.props.className}>
        {this.props.children}
      </HeroTitleStyles>
    )
  }
};

SectionTitle.contextType = themeContext;

export default SectionTitle;