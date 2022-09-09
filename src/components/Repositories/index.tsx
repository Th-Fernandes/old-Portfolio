import { Repository } from './Repository';
import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';

export function Repositories() {
  return (
    <section>
      <RepositoriesTitle>Projetos</RepositoriesTitle>

      <RepositoriesList>
        <RepositoryListItem>
          <Repository />
        </RepositoryListItem>
        <RepositoryListItem>
          <Repository />
        </RepositoryListItem>
        <RepositoryListItem>
          <Repository />
        </RepositoryListItem>
        <RepositoryListItem>
          <Repository />
        </RepositoryListItem>
      </RepositoriesList>
    </section>
  );
}

const RepositoriesTitle = styled.h2`
  margin-bottom: 2.4rem;

  @media (min-width: ${breakpoints['desktop-sm']}) {
    margin-bottom: 6rem;
  }
`;

const RepositoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${breakpoints['desktop-sm']}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8rem 2rem;
  }
`;

const RepositoryListItem = styled.li`
  @media (min-width: ${breakpoints['desktop-sm']}) {
    max-width: 52rem;
    width: calc(50% - 2rem);
  }
`;
