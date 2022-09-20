import styled from 'styled-components';
import colors from 'assets/colors.json';

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
        margin-bottom: 2.4rem;
      }

      > a {
        text-align: center;
        font-size: 2.4rem;
        
        &:active {
          color: ${colors.brand};
        }
      }
    }
  }

  #closeMobileNavButton {
    align-self: center;
  }
`;
