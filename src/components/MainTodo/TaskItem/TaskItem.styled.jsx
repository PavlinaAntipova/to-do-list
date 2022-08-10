import styled from "styled-components";

import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineCheck,
  MdFolderOpen,
  MdDateRange,
} from 'react-icons/md';

export const Task = styled.li`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  filter: ${props => `drop-shadow(0px 0px 5px ${props.theme.mainAccentColor})`};

  &:last-child {
  margin-bottom: 0;
}

 @media screen and (max-width: 767px) {
    padding: 10px;
    padding-left: 40px;
  flex-direction: column-reverse;
 }

    @media screen and (min-width: 768px) {
      padding: 20px;
      padding-left: 40px;
      align-items: center;
    }


`;

export const TaskBox = styled.div`
display: flex;
align-items: center;
`;

export const CheckBtn = styled.button`
  position: relative;
  margin-right: 20px;

    & svg {
     fill: ${props => props.theme.mainAccentColor};
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.mainAccentColor};
  border-radius: 50%;
  background-color: #fff;
  width: 30px;
  height: 30px;
  margin-left: auto;
  transition: ${props => `color ${props.theme.animationDuration} ${props.theme.animationFunction}`};

  &:hover, &:focus {
background-color: ${props => props.theme.mainAccentColor};
  color: #fff;
  }


`;


export const UncheckedIcon = styled(MdOutlineRadioButtonUnchecked)`
  width: 25px;
  height: 25px;
  opacity: 1;
  z-index: 2;
`;

export const CheckedIcon = styled(MdOutlineCheck)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  transition: ${props => `opacity ${props.theme.animationDuration} ${props.theme.animationFunction}`};
   z-index: 2;

${props => {
    if (props.completed) {
        return `opacity: 1;`;
    } else {
        return `opacity: 0;`;
    }

}}
`;

export const Checkbox = styled.input`
position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const TaskText = styled.p`
display: block;
width: 50px;
margin-right: 40px;
font-size: 14px;
transition: ${props => `text-decoration ${props.theme.animationDuration} ${props.theme.animationFunction}`};
${props => {
    if (props.completed) {
        return `text-decoration: line-through;`;
    } else {
        return ``;
    }
}}

@media screen and (min-width: 375px) {
width: 65px;
}

@media screen and (min-width: 425px) {
width: 100px;
}

@media screen and (min-width: 768px) {
width: 270px;
}

@media screen and (min-width: 1024px) {
  width: 450px;
}


@media screen and (min-width: 1100px) {
font-size: 18px;
width: 540px;
}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  font-size: 8px;

  @media screen and (min-width: 768px) {
  position: absolute;
  top: 5px;
  right: 50px;
 
  }
  @media screen and (min-width: 1100px) {
     right: 40px;
    font-size: 12px; 
   }
`;

export const InfoBox = styled.div`
display: flex;
align-items: center;
`;

export const InfoFolder = styled.button`
display: flex;
align-items: center;
margin-right: 20px;
font-size: inherit;
color: inherit;

&:hover, &:focus {
  text-decoration: underline;
}
 
`;

export const InfoDate = styled.div`
position: relative;
display: flex;
align-items: center;
`;


export const StyledFolderIcon = styled(MdFolderOpen)`
  margin-right: 10px;
  fill: ${props => props.theme.mainAccentColor};
  width: 15px;
  height: 15px;
`;

export const StyledDateIcon = styled(MdDateRange)`
position: absolute;
top: 50%;
right: 5px;
transform: translateY(-50%);
  fill: ${props => props.theme.mainAccentColor};
  width: 15px;
  height: 15px;
  pointer-events: none;
`;

export const DatePicker = styled.input`
border: none;
padding-left: 5px;
  color: grey;

  
    font-size: 8px;
    font-family: 'Ubuntu', sans-serif;

&:focus {
    outline: ${props => `1px solid ${props.theme.mainAccentColor}`};
    border-radius: 8px;
}

&::-webkit-inner-spin-button,
&::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
}

    @media screen and (min-width: 1100px) {
      font-size: 12px;
    }

`;

export const PriorityBox = styled.div`
position: absolute;
z-index: 3333;
top: 50%;
left: -5px;
transform: translateY(-50%);
width: 20px;
height: 50px;
border-radius: 4px;
cursor: pointer;


${props => {
  switch (props.priority) {
    case "low":
      return `background-color: #008A2B;`
    case "medium":
      return `background-color: #FCDE02;`
    case "high":
      return `background-color: #DB0914;`
  
    default: return `background-color: #fff;`
      
  }
}}

@media screen and (min-width: 768px) {
width: 30px;
}

`;

export const DropDown = styled.div`
position: absolute;
top: 0;
left: 55%;
padding: 5px;
background-color: #fff;
`;



export const PriorityButton = styled.button`

`;











