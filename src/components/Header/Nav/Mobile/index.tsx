import Link from "next/link";
import { X } from "phosphor-react";
import type { Dispatch, SetStateAction } from "react";
import navLinks from "./navLinks.json";
import { MobileNavContainer } from "./styles";

interface NavLinks {
  name: string,
  id: number
}

interface Props {
  isMobileNavOpened: boolean,
  setIsMobileNavOpened: Dispatch<SetStateAction<boolean>>
}

export function NavMobile({ isMobileNavOpened, setIsMobileNavOpened }: Props) {
  return (
    <>
      {
        isMobileNavOpened &&
        <MobileNavContainer>
          <ul className="mobile-nav-links">
            {
              navLinks.map(({ name, id }: NavLinks) => (
                <li key={id} className="mobile-nav-link">
                  <Link href="/">
                    <a>{name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
          <button
            onClick={() => setIsMobileNavOpened(false)} 
            id="closeMobileNavButton">
            <X size={48} color="#ffffff" weight="fill" />
          </button>
        </MobileNavContainer>
      }
    </>
  )
}