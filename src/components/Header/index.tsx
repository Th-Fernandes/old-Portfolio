import { useEffect, useState } from 'react';
import { NavMobile } from 'components/Header/Nav/Mobile';
import { HeaderContainer } from './styles';
import NavDesktop from 'components/Header/Nav/Desktop';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

export function Header() {
 
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const { getWidth, changeRenderByResize } = useWindowDimensions();

  useEffect(() => {
    if (screenWidth === 0) {
      const screenWidthSize = getWidth();
      setScreenWidth(screenWidthSize);
    }
    changeRenderByResize(setScreenWidth);
  }, [screenWidth]);

  return (
    <HeaderContainer>
      <div id="headerContainer">
        <a id="backLandingPageLink" href="#">
          Portfólio
        </a>

        {screenWidth < 768 ? (
          <NavMobile/>
        ) : (
          <NavDesktop />
        )}
      </div>
    </HeaderContainer>
  );
}
