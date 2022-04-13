import styeld from 'styled-components';

const ServiceSectionStyle = styeld.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
`;

export default ServiceSectionStyle;