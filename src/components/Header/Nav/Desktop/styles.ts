import styled from 'styled-components';
// import breakpoints from "assets/breakpoints.json";
import colors from 'assets/colors.json';

export const DesktopNavContainer = styled.nav`
  .desktop-nav-links {
    display: flex;
    gap: 6.2rem;

    .desktop-nav-link {
      > a {
        transition: 0.3s color;
        &:hover {
          color: ${colors.neutrals.light};
        }
      }
    }
  }
`;
