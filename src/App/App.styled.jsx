import styled from "styled-components";

import bg1Path from '../images/bg-1.png';
import bg2Path from '../images/bg-2.png';
import bg3Path from '../images/bg-3.png';
import bg4Path from '../images/bg-4.png';
import bg5Path from '../images/bg-5.png';

export const Container = styled.div`
min-width: 300px;
padding: 0 15px 30px;
margin: 0 auto;

  @media screen and (max-width: 375px) {
    max-width: 310px;
  }

  @media screen and (min-width: 425px) {
    max-width: 400px;
  }

@media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 980px;
  }

    @media screen and (min-width: 1100px) {
    max-width: 1200px;
  }
`;

export const Main = styled.div`
height: 100vh;
background-repeat: no-repeat;
background-position: top left, left 50%, top right, bottom left -200px, bottom right -200px;
overflow: hidden;

${props => `background-image: url(${bg1Path}), url(${bg2Path}), url(${bg3Path}), url(${bg4Path}), url(${bg5Path}), ${props.theme.bgGradient};`};

`;