import { NextLink } from 'components/Next/Link';
import { List, X } from 'phosphor-react';
import type { Dispatch, SetStateAction } from 'react';
import navLinks from 'components/Header/Nav/navLinks.json';
import { MobileNavContainer } from './styles';

interface NavLinks {
  id: number;
  name: string;
  path: string
}

interface Props {
  isMobileNavOpened: boolean;
  setIsMobileNavOpened: Dispatch<SetStateAction<boolean>>;
}

export function NavMobile({ isMobileNavOpened, setIsMobileNavOpened }: Props) {
  return (
    <>
      <List
        onClick={() => setIsMobileNavOpened(true)}
        size={30}
        color="#ffffff"
        weight="fill"
      />
      {isMobileNavOpened && (
        <MobileNavContainer>
          <ul className="mobile-nav-links">
            {navLinks.map(({id, name, path }: NavLinks) => (
              <li key={id} className="mobile-nav-link">
                <NextLink href={path}>{name}</NextLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsMobileNavOpened(false)}
            id="closeMobileNavButton"
          >
            <X size={48} color="#ffffff" weight="fill" />
          </button>
        </MobileNavContainer>
      )}
    </>
  );
}
