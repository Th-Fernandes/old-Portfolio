import { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";

import { Header } from "components/Header";
import { AboutMe } from "components/AboutMe";
import { Techs } from "pages/About-me/Techs";

import { windowWidth } from "helpers/get-window-width";
import techsUrl from "assets/techsUrl.json"
import { Contacts } from "pages/About-me/Contacts";

const AboutMePage: NextPage = () => {
  const techsTitle = ['Tecnologias que utilizo', 'Tecnologias que estou aprendendo'];
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [techsImgSize, setTechsImgSize] = useState<number>(40);

  useEffect(() => {
    const screenSize = windowWidth.get();

    windowWidth.changeRenderByResize(setScreenWidth);

    if (screenSize >= 768) return setTechsImgSize(120);
    setTechsImgSize(40);

  }, [screenWidth]);

  return (
    <>
      <Header />

      <main>
        <AboutMe hasHugeSpacing={false} />

        <section>
          {
            techsTitle.map((el, index) => {
              const techsInfo = index === 0 ? techsUrl.used : techsUrl.learning;

              return (
                <Techs key={el} title={el} gridColumnsSize={techsImgSize}>
                  {
                    techsInfo.map(({ id, title, url }) => (
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
                </Techs>
              )
            })
          }

          <Contacts/>
        </section>

        
      </main>
    </>
  )
}

export default AboutMePage;