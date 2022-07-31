import styled from "styled-components";

export const StyledUserStatistic = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 20px;
height: 90vh;
width: 90vh;
overflow-y: scroll;
background-color: #EBE9FD;
border: 2px solid #FFFFFF;
border-radius: 64.1055px;

`;

export const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 10px;
`;

export const ChartBox = styled.div`
margin-bottom: 10px;

&:nth-last-of-type() {
    margin-bottom: 0;
}

& canvas {
    margin: 0 auto;
}
`;



