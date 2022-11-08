import { GradientButton } from 'components/GradientButton';
import { NextLink } from 'components/Next/Link';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { SocialMediaButtonsContainer } from './styles';

export function SocialMediaButtons() {
  return (
    <SocialMediaButtonsContainer className="social-media-buttons">
      <NextLink href='https://www.linkedin.com/in/thiago-fernandes-front/' target='blank'>
        <GradientButton>
          <LinkedinLogo size={25} color="#ffffff" weight="regular" />
          <span>LinkedIn</span>
        </GradientButton>
      </NextLink>

      <NextLink href='https://github.com/Th-Fernandes' target='blank'>
        <GradientButton>
          <GithubLogo size={25} color="#ffffff" weight="regular" />
          <span>Github</span>
        </GradientButton>
      </NextLink>
    </SocialMediaButtonsContainer>
  );
}
