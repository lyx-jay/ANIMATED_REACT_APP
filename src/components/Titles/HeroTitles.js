import React from "react";
import styled from 'styled-components';
import themeList from '../../data/themeList';
import themeContext from '../../context/themeContext';

const HeroTitleStyles = styled.h1`
  font-size: 6rem;
  color: ${(props) => 
    props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  font-weight: 900;
  text-transform: capitalize;
`;

class HeroTitle extends React.Component {
  render() {
    return (
      <HeroTitleStyles mode={this.context.theme} className={this.props.className}>
        {this.props.children}
      </HeroTitleStyles>
    )
  }
};

HeroTitle.contextType = themeContext;

export default HeroTitle;