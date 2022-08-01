import styled from "styled-components";
import { Link } from 'react-router-dom';
import { MdRadioButtonUnchecked, MdOutlineCheck } from 'react-icons/md';

export const Header = styled.header`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: baseline;
`;


export const Logo = styled(Link)`
display: block;
font-size: 22px;
line-height: 112%;
letter-spacing: -0.005em;
`;

export const Icons = styled.span`
position: relative;
display: flex;
align-items: center;
height: 100%;
`;

export const IconChecked = styled(MdOutlineCheck)`
position: absolute;
top: 0;
left: 10%;
fill: ${props => props.theme.mainAccentColor};
`;

export const IconUnchecked = styled(MdRadioButtonUnchecked)`
fill:  ${props => props.theme.mainAccentColor};
`;






