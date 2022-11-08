import { Repository } from './Repository';
import { RepositoryContainer } from './styles';
import repositories from './repositories.json';

interface Props {
  quantity?: number;
}

export function Repositories({ quantity }: Props) {
  let setRepositories = [...repositories];
  setRepositories = repositories.slice(0, quantity);

  return (
    <RepositoryContainer id="projects">
      <h2>Projetos</h2>

      <ul>
        {setRepositories.map((repository) => (
          <li key={repository.id}>
            <Repository
              name={repository.name}
              thumb={repository.thumb}
              description={repository.description}
              link={repository.link}
              techs={repository.techs}
            />
          </li>
        ))}
      </ul>
    </RepositoryContainer>
  );
}
