import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`
    
export const Input = styled.input`
padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
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

  /* ${props => {
        if (props.name === "folder") {
            return `
        
        `;
        }
        if (props.name === "todo") {
            return `
        &::placeholder {
            color: #c899cf;
        }
        &:focus {
            background-color: #fff;
  filter: drop-shadow(0px 0px 5px #c899cf);
        }
        `;
        }
    
    }} */
  
  // folder
  // todo
`;

export const Btn = styled.button`
  font-size: 24px;
  margin-right: 20px;
 color: ${props => props.theme.mainAccentColor};
`
