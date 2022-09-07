import navLinks from 'components/Header/Nav/navLinks.json';
import { NextLink } from 'components/Next/Link';
import { DesktopNavContainer } from './styles';

export default function NavDesktop() {
  return (
    <DesktopNavContainer>
      <ul className="desktop-nav-links">
        {navLinks.map(({ name, id }) => (
          <li key={id} className="desktop-nav-link">
            <NextLink href="/">{name}</NextLink>
          </li>
        ))}
      </ul>
    </DesktopNavContainer>
  );
}
