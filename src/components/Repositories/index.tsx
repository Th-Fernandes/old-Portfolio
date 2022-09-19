import { Repository } from './Repository';
import { RepositoryContainer } from './styles';
import repositories from "./repositories.json";

export function Repositories() {
  return (
    <RepositoryContainer>
      <h2>Projetos</h2>

      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <Repository  
              name={repository.name}
              thumb={repository.thumb}
              description={repository.description}
              link={repository.link}
            />
          </li>
        ))}
      </ul>
    </RepositoryContainer>
  );
}
