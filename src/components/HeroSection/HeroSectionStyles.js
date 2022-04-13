import styled from 'styled-components';

const HeroSectionStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px);
.hero__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
}
`

export default HeroSectionStyles;