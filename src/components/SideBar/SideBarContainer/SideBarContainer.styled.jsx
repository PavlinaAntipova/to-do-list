import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
padding: 30px;
margin-right: 60px;
  width: 30%;
  overflow-y: scroll;
  box-shadow: -5px 0px 5px -5px rgba(200, 153, 207, 0.6) inset;
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

