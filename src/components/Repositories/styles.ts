import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
// import colors from 'assets/colors.json';

export const RepositoryContainer = styled.section`
  > h2 {
    margin-bottom: 2.4rem;

    @media (min-width: ${breakpoints['desktop-sm']}) {
      margin-bottom: 6rem;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (min-width: ${breakpoints['desktop-sm']}) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8rem 2rem;
    }

    > li {
      @media (min-width: ${breakpoints['desktop-sm']}) {
        max-width: 52rem;
        width: calc(50% - 2rem);
      }
    }
  }
`;
