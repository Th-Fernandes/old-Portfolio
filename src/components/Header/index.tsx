import {List} from "phosphor-react";
import { useState } from "react";
import { NavMobile } from "./Nav/Mobile";

export function Header() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState<boolean>(false)

  return (
    <header>
      <a href="#">Portfólio</a>

      <List 
        onClick={() => setIsMobileNavOpened(true)} 
        size={48} 
        color="#ffffff" 
        weight="fill" 
      />

      <NavMobile 
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
      
    </header>
    );
}
