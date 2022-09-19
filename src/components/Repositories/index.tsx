import { Repository } from './Repository';
import { RepositoryContainer } from './styles';

export function Repositories() {
  return (
    <RepositoryContainer>
      <h2>Projetos</h2>

      <ul>
        {[1, 2, 3, 4].map((el) => (
          <li key={el}>
            <Repository />
          </li>
        ))}
      </ul>
    </RepositoryContainer>
  );
}
