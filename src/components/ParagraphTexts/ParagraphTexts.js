import React from "react";
import styled from 'styled-components';
import themeList from '../../data/themeList';
import themeContext from '../../context/themeContext';

const ParagraphTextStyles = styled.p`
  font-size: 1.6rem;
  color: ${(props) => 
    props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
`;

class ParagraphText extends React.Component {
  render() {
    return (
      <ParagraphTextStyles mode={this.context.theme} className={this.props.className}>
        {this.props.children}
      </ParagraphTextStyles>
    )
  }
};

ParagraphText.contextType = themeContext;

export default ParagraphText;