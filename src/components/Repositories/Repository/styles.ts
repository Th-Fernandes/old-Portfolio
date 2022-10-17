import styled from 'styled-components';
// import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

export const RepositoryContainer = styled.div`
  .repository__name {
    margin-block: 2.4rem 1.6rem;
  }

  .repository__description {
    line-height: 2.5rem;
    margin-bottom: 0.8rem;
  }

  .repository__used-tecnologies {
    max-width: 100%;
    font-weight: 500;
    color: ${colors.brand};
    margin-bottom: 3.2rem;

    summary {
      margin-bottom: 1rem;
      cursor: pointer;
      max-width: 30rem;
    }

    &__tech {
      display: inline-block;
      background: ${colors.brand};
      margin-bottom: 0.8rem;
      margin-right: 1.2rem;
      border-radius: 1.6rem;
      padding: 0.4rem 1.2rem;
      color: ${colors.neutrals.light}
    }
  }
`;
