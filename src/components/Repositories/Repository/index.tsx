import { RepositoryContainer } from './styles';
import { DefaultImg } from 'components/DefaultImg';
import { GradientButton } from 'components/GradientButton';
import { Link } from 'phosphor-react';

interface Props {
  name: string,
  thumb: string,
  description: string,
  link: string,
  techs: string[],
}

export function Repository({name, thumb, description, link, techs }: Props) {
  return (
    <RepositoryContainer>
      <DefaultImg
        src={thumb}
        width={312}
        height={130}
        alt={name}
      />

      <h3 className="repository__name">{name || 'Nome do projeto'}</h3>

      <p className="repository__description">
        {description}
      </p>

      <details className="repository__used-tecnologies" >
        <summary>Tecnologias usadas no projeto</summary>

        {
          techs.map(tech => (
            <span key={tech} className='repository__used-tecnologies__tech'>
              {tech}
            </span>
          ))
        }

      </details>
      
      
      <a href={link} target="blank">
        <GradientButton
          width={{ mobile: '100%', desktop: '18.1rem' }}
        >
          <Link size={25} color="#ffffff" />
          <span>Visualizar</span>
        </GradientButton>
      </a>
    </RepositoryContainer>
  );
}
