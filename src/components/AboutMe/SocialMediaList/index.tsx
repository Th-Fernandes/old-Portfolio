import { NextLink } from 'components/Next/Link';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import socialMedias from 'assets/socialMedias.json';
import colors from 'assets/colors.json';
import { SocialMediaListContainer } from './styles';

export function SocialMediaList() {
  const listItems = [
    {
      id: 1,
      path: socialMedias.linkedIn,
      IconComponent: () => <LinkedinLogo size={30} color={colors.brand} />,
    },
    {
      id: 2,
      path: socialMedias.instagram,
      IconComponent: () => <InstagramLogo size={30} color={colors.brand} />,
    },
    {
      id: 3,
      path: socialMedias.github,
      IconComponent: () => <GithubLogo size={30} color={colors.brand} />,
    },
  ];

  return (
    <SocialMediaListContainer>
      {listItems.map(({ id, path, IconComponent }) => (
        <li key={id}>
          <NextLink href={path}>
            <IconComponent />
          </NextLink>
        </li>
      ))}
    </SocialMediaListContainer>
  );
}
