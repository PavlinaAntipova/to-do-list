import styled from "styled-components";

export const MainSection = styled.section`
padding: 20px;
height: 80vh;
background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(90.2deg, rgba(255, 255, 255, 0.2) 0.14%, rgba(255, 255, 255, 0) 99.81%);
border: 2px solid #FFFFFF;
backdrop-filter: blur(15px);
border-radius: 64.1055px;

${props => {
    if (props.location !== "/") {
        return `
        overflow-y: scroll;
        @media screen and (min-width: 768px) {
            display: flex;
        }
        
        
        `
         }
}};

${props => {
    if (props.location === "/") {
        return `align-items: center;

@media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media screen and (max-width: 1099px) {
    display: flex;
 justify-content: center;
}
        `
         }
}};
    
`;


