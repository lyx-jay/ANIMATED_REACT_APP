import React from "react";
import styled from 'styled-components';
import themeList from "../../data/themeList";
import themeContext from "../../context/themeContext";

const FormFieldStyle = styled.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: ${(props) => 
      props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
  }
  input,
  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    background-color: var(--lightBlue_2);
  }
  textarea {
    height: auto;
    resize: vertical;
  }
`;

class FormField extends React.Component {
  render() {
    const {label, id, rows = 1, className, ...rest} = this.props;
    return (
      <FormFieldStyle className={className} mode={this.context.theme}>
        <label htmlFor={id}>
          {label}
          {
            rows <= 1 ? 
            (<input id={id} {...rest}/>) : 
            (<textarea id={id} rows={rows} {...rest}/>)
          }
        </label>
      </FormFieldStyle>
    )
  }
}

FormField.contextType = themeContext;

export default FormField;