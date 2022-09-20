import { SocialMediaButtons } from 'pages/Home/PresentationBanner/SocialMediaButtons';
import { PresentationBannerContainer } from './styles';

export function PresentationBanner() {
  return (
    <PresentationBannerContainer>
      <article>
        <span className="presentationContent">OLÁ, EU SOU</span>
        <span className="presentationContent dev-name">THIAGO FERNANDES</span>
        <span className="presentationContent">DESENVOLVEDOR FRONT-END</span>
      </article>

      <SocialMediaButtons />
    </PresentationBannerContainer>
  );
}
