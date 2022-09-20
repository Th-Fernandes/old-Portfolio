import type { NextPage } from "next"
import { Header } from "components/Header";
import { AboutMe } from "components/AboutMe";
import { Techs } from "pages/About-me/Techs";
import Image from "next/image";
import techsUrl from "assets/techsUrl.json"
import { useEffect, useState } from "react";
import { windowWidth } from "helpers/get-window-width";

const AboutMePage: NextPage = () => {
  const {used, learning} = techsUrl;

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [techsImgSize, setTechsImgSize] = useState<number>(40);

  useEffect(() => {
    const screenSize = windowWidth.get();

    windowWidth.changeRenderByResize(setScreenWidth);

    if(screenSize >= 768) return setTechsImgSize(120);
    setTechsImgSize(40);
    
  }, [screenWidth]);

  return (
    <>
      <Header />

      <main>
        <AboutMe/>

        <section>
          <Techs title="Tecnologias que utilizo" gridColumnsSize={techsImgSize}>
            <div>
              {
                used.map(({id, title, url}) => (
                  <Image 
                    key={id} 
                    src={url} 
                    title={title} 
                    width={techsImgSize}
                    height={techsImgSize}
                    alt={title}
                  />
                ))
              }
            </div>
          </Techs>

          <Techs title="Tecnologias que estou aprendendo" gridColumnsSize={techsImgSize}>
           <div>
            {
              learning.map(({id, title, url}) => (
                <Image 
                  key={id} 
                  src={url} 
                  title={title} 
                  width={techsImgSize}
                  height={techsImgSize}
                  alt={title}
                />
              ))
            }
           </div>
          </Techs>

          <div>
            <h2>Entre em contato</h2>

            <div>
              icon
              <span>(21) 99651-8546</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutMePage;