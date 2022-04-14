import styled from 'styled-components';

const newsletterSectionStyle = styled.div`
  padding: 10rem 0;
  .newsletter__wrapper {
    padding: 5rem 3rem;
    border-radius: 12px;
    max-width: 500px;
    margin: 0 auto;
    background: var(--mediumSlateBlue);
    text-align: center;
  }
  .newsletter__title {
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .newsletter__subtitle {
    color: var(--lightBlue_1);
    margin-bottom: 2rem;
  }
  .newsletter__form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 100%;
      max-width: 300px;
      height: 40px;
      padding-left: 1rem;
      background-color: var(--lightBlue_1);
      border: none;
      border-radius: 4px;
      font-size: 1.6rem;
    }
    button {
      height: 40px;
      font-size: 1.6rem;
      cursor: pointer;
      padding: 0 1.5rem;
      text-transform: capitalize;
      background-color: var(--lightBlue_1);
      border: none;
      border-radius: 4px;
      transition: 0.3s ease background-color;
    }
  }
`;

export default newsletterSectionStyle;