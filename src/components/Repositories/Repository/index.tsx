import { RepositoryContainer } from './styles';
import { DefaultImg } from 'components/DefaultImg';
import { GradientButton } from 'components/GradientButton';
import { Link } from 'phosphor-react';

interface Props {
  name: string,
  thumb: string,
  description: string,
  link: string
}

export function Repository({name, thumb, description, link }: Props) {
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

      <p className="repository__used-tecnologies">
        Tecnologias usadas no projeto
      </p>
      
      <a href={link} target="blank">
        <GradientButton
          width={{ mobile: '100%', desktop: '18.1rem' }}
          borderGradient="purple"
        >
          <Link size={25} color="#ffffff" />
          <span>Visualizar</span>
        </GradientButton>
      </a>
    </RepositoryContainer>
  );
}
