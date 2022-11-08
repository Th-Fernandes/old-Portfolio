import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';
import { fadeIn } from 'assets/GlobalStyle';


export const PresentationBannerContainer = styled.section`
  margin-top: 5.6rem;
  animation: 0.75s ${fadeIn} ease-in;

  @media (min-width: ${breakpoints['desktop-sm']}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 67.3rem;
    margin-top: 0;
    background: url(/img/looper-bg-sm.svg) no-repeat right;
  }

  @media (min-width: 1441px) {
    background: url(/img/looper-bg.svg) no-repeat right;
  }

  > article {

    .presentationContent {
      display: block;
      font-weight: 600;
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      

      &:not(:last-child) {
        margin-bottom: 0.8rem;

        @media (min-width: ${breakpoints['desktop-sm']}) {
          margin-bottom: 1.2rem;
        }
      }

      &.dev-name {
        font-size: clamp(3.2rem, 5vw, 6.4rem);
        color: ${colors.brand};
      }
    }
  }
`;
