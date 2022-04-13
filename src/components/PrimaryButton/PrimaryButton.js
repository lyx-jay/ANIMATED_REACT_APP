import React from "react";
import styled from 'styled-components';

const PrimaryButtonStyle = styled.a`
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 8px;
  font-weight: 500;
  border: none;
`

class PrimaryButton extends React.Component {
  render() {
    return (
      <PrimaryButtonStyle className={this.props.className}>
        {this.props.children} 
      </PrimaryButtonStyle>
    )
  }
}

export default PrimaryButton;