import navLinks from 'components/Header/Nav/navLinks.json';
import { NextLink } from 'components/Next/Link';
import { DesktopNavContainer } from './styles';

export default function NavDesktop() {
  return (
    <DesktopNavContainer>
      <ul className="desktop-nav-links">
        {navLinks.map(({ id, name, path }) => (
          <li key={id} className="desktop-nav-link">
            <NextLink href={path}>{name}</NextLink>
          </li>
        ))}
      </ul>
    </DesktopNavContainer>
  );
}
