import styled from 'styled-components';
import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

interface Props {
  width?: { mobile: string; desktop: string };
}

export const GradientButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: ${(props) => props?.width?.mobile || 'min(35vw, 14.4rem)'};
  max-width: ${(props) => props?.width?.desktop};
  height: 4rem;
  color: ${colors.neutrals.light};
  font-weight: 600;
  border: 2px transparent solid;
  border: 2px solid ${colors.brand};
  transition: 0.5s ease background;

  &:hover {
    background: ${colors.brand}
  }

  @media (min-width: ${breakpoints['desktop-sm']}) {
    width: ${(props) => props?.width?.desktop || '15.3rem'};
  }


`;

