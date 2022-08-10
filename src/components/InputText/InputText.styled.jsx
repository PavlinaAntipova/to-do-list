import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-bottom: 20px;
`
    
export const Input = styled.input`
padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 16px;
  &::placeholder {
            color: ${props => props.theme.mainAccentColor};
            font-size: 16px;
        }
        &:focus {
            background-color: #fff;
  filter: ${props => `drop-shadow(0px 0px 5px ${props.theme.mainAccentColor})`};
        }

`;

export const Btn = styled.button`
  font-size: 24px;
  margin-right: 20px;
 color: ${props => props.theme.mainAccentColor};
 @media screen and (min-width: 768px) and (max-width: 1099px) {
    margin-right: 10px;
 }
`
