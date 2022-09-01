import {List} from "phosphor-react";
import { useState } from "react";
import { NavMobile } from "./Nav/Mobile";

export function Header() {
  const [isOpenMobileNavClicked, setIsOpenMobileNavClicked] = useState<boolean>()

  return (
    <header>
      <a href="#">Portfólio</a>

      <List 
        onClick={() => setIsOpenMobileNavClicked(true)} 
        size={48} 
        color="#ffffff" 
        weight="fill" 
      />

      {
        isOpenMobileNavClicked &&
        <NavMobile />
      }
    </header>
    );
}
