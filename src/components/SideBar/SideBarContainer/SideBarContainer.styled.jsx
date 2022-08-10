import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
padding: 30px;
margin-right: 60px;
  width: 30%;
  overflow-y: scroll;
  box-shadow: -5px 0px 5px -5px rgba(200, 153, 207, 0.6) inset;

   @media screen and (max-width: 767px) {
position: absolute;
z-index: 99999;
top: 0;
bottom: 0;
left: 0;
background-color: #F1F0FD;
width: 70%;
   }

   @media screen and (min-width: 768px) and (max-width: 1099px) {
    padding: 10px 20px 10px 5px;
    margin-right: 10px;
      width: 31%;
   }
`;

export const Controls = styled.div`
width: 100%;
  margin-bottom: 20px;
  border-bottom: ${props => `1px solid  ${props.theme.mainAccentColor}`};
`;

export const Btn = styled(NavLink)`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;

  &.active {
    color: ${props => props.theme.mainAccentColor};
    font-weight: 700;
  }
`;

