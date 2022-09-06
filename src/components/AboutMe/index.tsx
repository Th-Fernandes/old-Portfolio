import { SkillsInfo } from "./SkillsInfo";
import { SocialMediaList } from "./SocialMediaList";
import { AboutMeContainer } from "./styles";

export function AboutMe() {
  return (
    <AboutMeContainer>
      <div className="description-container">
        <article  className="about-me-content">
          <h2 className="">SOBRE MIM</h2>

          <p className="about-me-content__homeland">Campo Grande, RJ</p>
          <p className="about-me-content__description">
            Olá! ✋🏼 Sou um desenvolvedor front-end que está sempre em busca de solucionar problemas através das 
            linhas de código. Possuo conhecimentos técnicos nas seguintes ferramentas: HTML, CSS e JS, ReactJS,
            Next.js, Pré-processadores CSS e CSS-in-JS (Sass e Styled-components)
          </p>
        </article>

        <SocialMediaList/>
        <SkillsInfo/>
      </div>

    </AboutMeContainer>
  )
}