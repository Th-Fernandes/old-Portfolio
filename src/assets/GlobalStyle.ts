import { createGlobalStyle, keyframes } from 'styled-components';
import colors from 'assets/colors.json';
import breakpoints from 'assets/breakpoints.json';

export const fadeIn = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font: 62.5%  'Inter', sans-serif;
  }

  body {
    min-height: 100vh;
    font-size: 1.8rem;
    background-color: ${colors.neutrals.dark};
    color: ${colors.neutrals.light};
  }
  
  /* TEXT CONFIG */
  p {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.neutrals['light-gray']};
    line-height: 3.2rem;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }


  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.9rem;
    color: ${colors.neutrals.light};
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.9rem;
    color: ${colors.neutrals.light};

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }

    @media (min-width: ${breakpoints['desktop-sm']}) {
      font-size: 2.4rem;
    }
  }

  /* LINK CONFIG */
  a {
    display: block;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;
    text-decoration: none;
    color: ${colors.neutrals['light-gray']};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  /* LIST CONFIG */

  li {
    list-style: none;
  }

  /* button config */
  button {
    width: min(14.4rem, 90%);
    min-height: 4rem;
    background-color: transparent;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  /* containers config */
  
  // default container
   section, footer {
    max-width: 144rem;
    margin: auto;
    padding-inline: 2.4rem ;
    padding-block: 4rem;
    

    @media (min-width: ${breakpoints.tablet}) {
      padding-inline: 4.8rem;
      padding-block: 6rem;
    }

    @media (min-width: ${breakpoints['desktop-sm']}) {
    padding-inline: min(12.5%, 18rem);
    padding-block: 10rem;
    }
  }
  

  // div as container (é preciso resetar as configurações padrão do container (max-width, margin, padding))
  header, section, footer {
    .__global-container {
      max-width: 144rem;
      margin: auto;
      padding-inline: 2.4rem ;
      padding-block: 4rem;

      @media (min-width: ${breakpoints.tablet}) {
        padding-inline: 4.8rem;
        padding-block: 6rem;
      }

      @media (min-width: ${breakpoints['desktop-sm']}) {
      padding-inline: min(12.5%, 18rem);
      padding-block: 10rem;
      }
      }
  }
`;
