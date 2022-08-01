import styled from "styled-components";
import { Link } from 'react-router-dom';

import bgPath from '../../images/hero-bg.png';

import { ReactComponent as OrnamentDots } from '../../images/hero-ornamet-1.svg';
import { ReactComponent as OrnamentCircles } from '../../images/hero-ornamet-2.svg';
import { ReactComponent as OrnamentWaves } from '../../images/hero-ornamet-3.svg';
import { ReactComponent as OrnamentSolidLine } from '../../images/hero-ornamet-4.svg';
import { ReactComponent as OrnamentArrow } from '../../images/hero-ornamet-5.svg';
import { ReactComponent as OrnamentWave } from '../../images/hero-ornamet-6.svg';
import { ReactComponent as OrnamentDottedLineLight } from '../../images/hero-ornamet-7.svg';
import { ReactComponent as OrnamentDottedLineBold } from '../../images/hero-ornamet-8.svg';

export const HomeSection = styled.div`
display: flex;
justify-content: space-around;

`;

export const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
`;

export const Title = styled.h1`
font-size: 42px;
margin-bottom: 20px;
`;

export const MainText = styled.p`
font-size: 26px;
margin-bottom: 10px;
`;



export const AddText = styled.p`
display: flex;
align-items: center;
margin-bottom: 20px;
opacity: 0.6;
align-self: flex-end;

& svg {
    margin-left: 10px;
}
`;

export const Btn = styled(Link)`
display: block;
padding: 20px 30px;
background-image: ${props => props.theme.btnGradient};
border-radius: 11px;
font-size: 22px;
line-height: 112%;
letter-spacing: -0.005em;
`;

export const ImageBox = styled.div`
position: relative;
height: 500px;
width: 40%;
background-image: ${props => `url(${bgPath})`};
background-repeat: no-repeat;
border-radius: 64.1055px;

& svg {
    position: absolute;
}
`;

export const StyledOrnamentDots = styled(OrnamentDots)`
width: 200px;
top: 50%;
left: -10%;
`;

export const StyledOrnamentCircles = styled(OrnamentCircles)`
top: 10%;
right: -5%;
`;

export const StyledOrnamentWaves = styled(OrnamentWaves)`
width: 150px;
top: 20%;
left: -10%;

`;

export const StyledOrnamentSolidLine = styled(OrnamentSolidLine)`
width: 120px;
bottom: 10%;
left: 40%;
`;

export const StyledOrnamentArrow = styled(OrnamentArrow)`
top: 10%;
left: 30%;
`;

export const StyledOrnamentWave = styled(OrnamentWave)`
width: 200px;
top: 55%;
right: -5%;
`;

export const StyledOrnamentDottedLineLight = styled(OrnamentDottedLineLight)`
width: 200px;
top: 56%;
right: -2%;
`;

export const StyledOrnamentDottedLineBold = styled(OrnamentDottedLineBold)`
width: 150px;
top: 62%;
right: -2%;
`;


