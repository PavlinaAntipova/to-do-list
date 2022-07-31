import styled from "styled-components";

export const Title = styled.h2`
margin-bottom: 45px;
`;

export const Text = styled.p`
margin-top: 20px;
color: #868686;
font-size: 14px;
line-height: 2.5em;
letter-spacing: 0.08em;

& a {
   color: #D1ACDB; 
   text-decoration: underline;
transition: ${props => `color ${props.theme.animationDuration} ${props.theme.animationFunction}`};

   &:hover, &:focus {
      color: #9c82a3;
   }
}
`;

export const Icon = styled.img`
position: absolute;
`;


export const StyledIcon1 = styled(Icon)`
top: 50%;
left: 20%;
`;


export const StyledIcon2 = styled(Icon)`
top: 20%;

`;


export const StyledIcon3 = styled(Icon)`
top: 0;

`;
