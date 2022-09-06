import styled from 'styled-components';
// import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

export const AboutMeContainer = styled.section`
  min-height: 36.2rem;
  padding-block: 4rem;
  margin-top: 5.6rem;

  .description-container {
    .about-me-content {
     &__homeland {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${colors.neutrals.light};
        margin-block: 1.6rem 0.8rem;
      }

      &__description {
        max-width: 65rem;
      }
    }
  }
`
