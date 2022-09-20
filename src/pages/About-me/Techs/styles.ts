import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json'; 

interface props {
  gridColumnsSize: number
}

export const TechsContainer = styled.div<props>`
  margin-bottom: 4rem;

  > .techs-title {
    margin-bottom: 1.2rem;

    @media (min-width: ${breakpoints['desktop-sm']}) {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }

  > .techs-img-container {
    display: grid;
    grid-template-columns: repeat(6, ${props => props.gridColumnsSize}px);
    gap: 2rem;
    overflow-x: scroll;

    @media (min-width: ${breakpoints['desktop-sm']}) {
      overflow-x: hidden;
    }
  }
`