import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: var(--darkBlue_4);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
  }
  .footer__logo {
    max-width: 120px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__desc {
    color: var(--white);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__links {
    margin-bottom: 2rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
    a {
      font-size: 1.6rem;
      line-height: 1.5rem;
      color: var(--lightBlue_1);
    }
    li:hover {
      a {
        color: var(--mediumSlateBlue);
        text-descoration: underline
      }
    }
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--lightBlue_1);
  }
`;

export default  FooterStyle;