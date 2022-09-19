import { GradientButton } from 'components/GradientButton';
import { NextLink } from 'components/Next/Link';
import { EnvelopeSimple, FileArrowDown } from 'phosphor-react';
import { SkillsInfoContainer } from './styles';

export function SkillsInfo() {
  const buttons = [
    {
      id: 1,
      Component() {
        return (
          <NextLink href='/curriculo.pdf' download={true}>
            <GradientButton borderGradient="pink">
              <FileArrowDown size={25} color="#ffffff" />
              <span>Currículo</span>
            </GradientButton>
          </NextLink>
        );
      },
    },
    {
      id: 2,
      Component() {
        return (
          <GradientButton borderGradient="purple">
            <EnvelopeSimple size={25} color="#ffffff" />
            <span>Email</span>
          </GradientButton>
        );
      },
    },
  ];

  return (
    <SkillsInfoContainer>
      {buttons.map(({ id, Component }) => (
        <li key={id}>
          <Component />
        </li>
      ))}
    </SkillsInfoContainer>
  );
}
