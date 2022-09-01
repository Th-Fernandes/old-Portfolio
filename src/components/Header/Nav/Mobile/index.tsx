import Link from "next/link";
import navLinks from "./navLinks.json";
import { MobileNavContainer } from "./styles";

interface NavLinks {
  name: string,
  id: number
}

export function NavMobile() {
  return (
    <MobileNavContainer className="mobile-nav-container">
      <ul>
        {
          navLinks.map(({name, id}:NavLinks) => (
            <li key={id}>
              <Link href="/">
                <a>{name}</a>
                
              </Link>
              <p>test</p>
            </li>
          ))
        }
      </ul>
    </MobileNavContainer>
  ) 
}