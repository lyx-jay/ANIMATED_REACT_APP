import styled from 'styled-components';
import themeList from '../../data/themeList';


const HeaderStyles = styled.header`
border-bottom: 1px solid var(--mediumSlateBlue);
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);

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
    props.mode === themeList.light ? 'var(--black)' : 'var(--white)'
  }
}
`

export default HeaderStyles;