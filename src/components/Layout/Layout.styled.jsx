import styled from "styled-components";

export const MainSection = styled.section`
padding: 20px;
height: 80vh;
background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(90.2deg, rgba(255, 255, 255, 0.2) 0.14%, rgba(255, 255, 255, 0) 99.81%);
border: 2px solid #FFFFFF;
backdrop-filter: blur(15px);
border-radius: 64.1055px;

${props => {
    if (props.location !== '/signup' && props.location !== '/login' && props.location !== "/") {
        return `display: flex;
        overflow: hidden;
        `
         }
}};
    
${props => {
    if (props.location === '/signup' || props.location === '/login') {
        return `position: absolute;
        top: 50%;
        right: 0;
        padding: 100px 200px 52px 200px;
        width: 40%;
        height: 76vh;
        transform: translateY(-50%);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        background-color: #fff;

       `;
    } return ``;
}};
`;


