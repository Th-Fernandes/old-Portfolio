import styled from "styled-components";
import breakpoints from "assets/breakpoints.json"
import colors from "assets/colors.json";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem ;

  @media (min-width: ${breakpoints["desktop-sm"]}) {
    padding-top: 4rem;
    padding-inline: min(12.5%, 18rem);
  }

  #backLandingPageLink {
    color: ${colors.brand};
  
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2.4rem;
    }
  }
`