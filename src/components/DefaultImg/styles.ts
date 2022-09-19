import styled from 'styled-components';
// import breakpoints from 'assets/breakpoints.json';
import colors from 'assets/colors.json';

interface Props {
  width: number;
  height: number;
}

export const DefaultImgContainer = styled.div<Props>`
  max-width: 52rem;
  /* width: 100%; */
  /* height: ${(props) => props.height + 'px'}; */
  border-left: 5px solid ${colors.brand};
  border-radius: 0.4rem;
  background-color: #181818;

  .img {
    display: block;
    width: 50rem;
  }
`;
