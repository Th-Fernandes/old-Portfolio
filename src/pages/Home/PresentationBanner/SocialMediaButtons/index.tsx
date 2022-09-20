import { GradientButton } from 'components/GradientButton';
import { NextLink } from 'components/Next/Link';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { SocialMediaButtonsContainer } from './styles';

export function SocialMediaButtons() {
  const buttons = [
    {
      id: 1,
      Component() {
        return (
          <NextLink href='https://www.linkedin.com/in/thiago-fernandes-front/' target='blank'>
            <GradientButton borderGradient="purple">
              <LinkedinLogo size={25} color="#ffffff" weight="regular" />
              <span>LinkedIn</span>
            </GradientButton>
          </NextLink>
        );
      },
    },
    {
      id: 2,
      Component() {
        return (
          <NextLink href='https://github.com/Th-Fernandes' target='blank'>
              <GradientButton borderGradient="pink">
                <GithubLogo size={25} color="#ffffff" weight="regular" />
                <span>Github</span>
              </GradientButton>
          </NextLink>
        );
      },
    },
  ];

  return (
    <SocialMediaButtonsContainer className="social-media-buttons">
      {buttons.map(({ id, Component }) => (
        <li key={id}>
          <Component />
        </li>
      ))}
    </SocialMediaButtonsContainer>
  );
}
