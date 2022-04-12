import styled from 'styled-components';
import "../../assets/icons/iconfont.css";


const ThemeToggleStyles = styled.div`
display: flex;
input {
  height: 0;
  width: 0;
  display: none
  visibility: hidden;
}
label {
  position: relative;
  width: 51px;
  height: 27px;
  border-radius: 13px;
  background-color: var(--toggleButtonCOlor);
  cursor: pointer;
  display: flex;
  align-items: center;
  .iconfont {
    flex: 1;
    text-align: center;
    font-size: 20px;
    z-index: 2;
  }
}


label::after {
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  height: 23px;
  width: 23px;
  border-radius: 11px;
  background-color: var(--mediumSlateBlue);
  transition: all 300ms cubic-bezier(.4, .4, .25, 1.35);
  z-index: 1;
}

input:checked + label::after {
  transform: translateX(23px);
}
`

export default ThemeToggleStyles;