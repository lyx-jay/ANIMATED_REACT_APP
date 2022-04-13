import styled from 'styled-components';
import themeList from '../../data/themeList';


const HeaderStyles = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: var(--header-height);
background-color: ${(props) => 
  props.mode === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
border-bottom: 1px solid var(--mediumSlateBlue);
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navigation ul {
  display: flex;
  align-items: center;
}

.navigation ul .item {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  color: ${(props) => 
    props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
}
`

export default HeaderStyles;