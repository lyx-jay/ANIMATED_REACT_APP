import styled from 'styled-components';
import themeList from '../../data/themeList';

const ServiceItemStyle = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  .services__icon {
    font-size: 2rem;
    margin-bottom: 2rem;
    background-color: var(--mediumSlateBlue);
    width: fit-content;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--white);
    svg {
      width: 60%;
    }
  }
  .services__title {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${(props) => 
      props.mode === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  &:hover {
    background-color: var(--mediumSlateBlue);
    .services__icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .services__title {
      color: var(--lightBlue_1);
    }
    .services__desc {
      color: var(--lightBlue_1);
    }
  }
`;

export default ServiceItemStyle;