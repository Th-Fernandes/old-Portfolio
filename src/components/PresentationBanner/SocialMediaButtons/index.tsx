import { GradientButton } from "components/GradientButton";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { SocialMediaButtonsContainer } from "./styles";

export function SocialMediaButtons() {
  const buttons = [
    {
      id: 1,
      Component() {
        return (
          <GradientButton borderGradient="purple">
            <LinkedinLogo size={25} color="#ffffff" weight="regular" />
            <span>LinkedIn</span>
          </GradientButton>
        )
      } 
    },
    {
      id: 2,
      Component() {
        return (
          <GradientButton borderGradient="pink">
            <GithubLogo size={25} color="#ffffff" weight="regular"/>
            <span>Github</span>
          </GradientButton>
        )
      }
    }
  ]

  return (
    <SocialMediaButtonsContainer className="social-media-buttons">
      {
        buttons.map(({id, Component}) => (
          <li key={id}>
              <Component />
          </li>
        ))
      }
    </SocialMediaButtonsContainer>
  )
}