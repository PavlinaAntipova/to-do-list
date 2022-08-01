import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Text = styled.p`
  font-style: italic;
  color: ${props => props.theme.mainAccentColor};
  margin-bottom: 20px;
`;

export const List = styled.ul`
 margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #000;

  &:last-child {
     margin-bottom: 0;
  }
`;


export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: baseline;

&.active {
    color: ${props => props.theme.mainAccentColor};
    font-weight: 700;
  }
`;

export const Name = styled.p`
 font-size: 16px;
`;

export const Amount = styled.span`
 justify-self: end;
  margin-left: auto;
  font-size: 14px;
`;

export const DeleteBtn = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
   color: #000;
  width: 25px;
  height: 25px;
`;


