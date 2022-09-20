import { useEffect, useState } from 'react';
import { NavMobile } from 'components/Header/Nav/Mobile';
import { HeaderContainer } from './styles';
import NavDesktop from 'components/Header/Nav/Desktop';
import { windowWidth } from 'helpers/get-window-width';

export function Header() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (screenWidth === 0) {
      const screenSize = windowWidth.get();
      setScreenWidth(screenSize);
    }

    windowWidth.changeRenderByResize(setScreenWidth);
  }, [screenWidth]);

  return (
    <HeaderContainer>
      <a id="backLandingPageLink" href="#">
        Portfólio
      </a>

      {
        screenWidth < 768 
          ? <NavMobile
              isMobileNavOpened={isMobileNavOpened}
              setIsMobileNavOpened={setIsMobileNavOpened}
            /> 
          : <NavDesktop />    
      }
    </HeaderContainer>
  );
}
