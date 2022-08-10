import styled from "styled-components";

export const StyledUserMenu = styled.button`
font-weight: 700;
& p {
    margin-top: 5px;
}

&:hover, &:focus {
    color: ${props => props.theme.mainAccentColor};
}
`;


