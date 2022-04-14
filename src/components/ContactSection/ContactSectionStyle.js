import styled from 'styled-components';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
`;

export default ContactSectionStyle;