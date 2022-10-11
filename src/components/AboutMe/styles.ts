import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';
import { fadeIn } from 'assets/GlobalStyle';

interface Props {
  hasHugeSpacing: boolean
}

export const AboutMeContainer = styled.section<Props>`
  max-width: 100%;
  min-height: 36.2rem;
  padding: 0;
  margin-top: ${props => props.hasHugeSpacing ? '5.6rem' : 0};
  padding-block: 4rem;
  background-color: ${colors.neutrals['dark-200']};
  animation: ${fadeIn} 2s ease-in-out;

  .__global-container {
    @media (min-width: ${breakpoints['desktop-md']}) {
      display: flex;
      justify-content: space-between;
      padding-block: ${props => props.hasHugeSpacing ? '10rem' : 0}
    }

    .dev-picture {
      display: none;
      visibility: hidden;

      @media (min-width: ${breakpoints['desktop-md']}) {
        display: block;
        visibility: visible;
        width: 36.7rem;
        height: 36.7rem;
        border-left: 5px solid ${colors.brand};
        background-color: ${colors.neutrals['dark']};
        border-radius: 0.4rem;
      }
    }

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
  }
`;
