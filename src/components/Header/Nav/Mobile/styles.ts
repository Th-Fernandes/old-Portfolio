import styled from "styled-components";
import colors from "assets/colors.json"

export const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: ${colors.neutrals.dark};
  position: fixed;
  inset: 0;  
  height: 100vh;
  padding: 1.6rem;

  .mobile-nav-links {
    flex-grow: 1;

    .mobile-nav-link {
      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }

      > a {
          &:active {
          color: ${colors.neutrals.light};
        }
      }
    }
  }

  #closeMobileNavButton {
    align-self: center;
  }
`

