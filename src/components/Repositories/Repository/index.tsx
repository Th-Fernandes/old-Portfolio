import { RepositoryContainer } from './styles';
import { DefaultImg } from 'components/DefaultImg';
import { GradientButton } from 'components/GradientButton';
import { Link } from 'phosphor-react';

export function Repository() {
  return (
    <RepositoryContainer>
      <DefaultImg
        src="https://github.com/th-fernandes.png"
        width={312}
        height={130}
        alt="lkkkkk"
      />

      <h3 className="repository__name">Nome do projeto</h3>

      <p className="repository__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </p>

      <p className="repository__used-tecnologies">
        Tecnologias usadas no projeto
      </p>
      <GradientButton
        width={{ mobile: '100%', desktop: '18.1rem' }}
        borderGradient="purple"
      >
        <Link size={25} color="#ffffff" />
        <span>Visualizar</span>
      </GradientButton>
    </RepositoryContainer>
  );
}
