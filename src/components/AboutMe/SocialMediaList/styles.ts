import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
// import colors from 'assets/colors.json';

export const SocialMediaListContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3.4rem;
  margin-top: 3.4rem;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: left;
  }
`;
