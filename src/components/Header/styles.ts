import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

export const HeaderContainer = styled.header`
  position: sticky;
  inset: 0;
  z-index: 99999;
  background: linear-gradient(163deg, rgba(2,0,36,1) 0%, rgba(0,212,255,0) 100%);
  padding: 2.4rem ;

  @media (min-width: ${breakpoints['desktop-sm']}) {
    padding-top: 4rem;
    padding-inline: min(12.5%, 18rem);
  }

  #headerContainer {
    padding-bottom: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 144rem;
    
    @media (min-width: ${breakpoints['desktop-sm']}) {
      margin: auto;
      padding-inline: min(12.5%, 18rem);
    }
  }

  #backLandingPageLink {
    color: ${colors.brand};

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.4rem;
    }
  }
`;
