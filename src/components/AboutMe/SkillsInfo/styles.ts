import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
// import colors from 'assets/colors.json';

export const SkillsInfoContainer = styled.ul`
  display: flex;
  gap: 1.6rem;
  margin-top: 4rem;

  @media (min-width: ${breakpoints['desktop-sm']}) {
    margin-top: 6rem;
  }
`;
