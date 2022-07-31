import styled from "styled-components";

import bg1Path from '../images/bg-1.png';
import bg2Path from '../images/bg-2.png';
import bg3Path from '../images/bg-3.png';
import bg4Path from '../images/bg-4.png';
import bg5Path from '../images/bg-5.png';

export const Container = styled.div`
width: 1200px;
padding: 0 15px;
margin: 0 auto;
`;

export const Main = styled.div`
padding-bottom: 30px;
height: 100vh;
background-repeat: no-repeat;
background-position: top left, left 50%, top right, bottom left -200px, bottom right -200px;
overflow-y: scroll;

${props => {
    if (props.location === '/signup' || props.location === '/login') {
        return `background-image: ${props.theme.bgGradient}`;
    }
    return `background-image: url(${bg1Path}), url(${bg2Path}), url(${bg3Path}), url(${bg4Path}), url(${bg5Path}), ${props.theme.bgGradient}`;
}};



`;