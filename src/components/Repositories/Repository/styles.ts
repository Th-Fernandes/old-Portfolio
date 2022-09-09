import styled from 'styled-components';
// import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

export const RepositoryContainer = styled.div`
  /* max-width: 52rem;
  width: calc(50% - 2rem); */

  .repository__name {
    margin-block: 2.4rem 1.6rem;
  }

  .repository__description {
    line-height: 1.8rem;
    margin-bottom: 0.8rem;
  }

  .repository__used-tecnologies {
    font-weight: 500;
    color: ${colors.brand};
    margin-bottom: 3.2rem;
  }
`;
