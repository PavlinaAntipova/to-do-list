import {BsFillSuitHeartFill} from 'react-icons/bs';

import {
  HomeSection,
  TextBox,
  Title,
  MainText,
  AddText,
  Btn,
  ImageBox,
  StyledOrnamentDots,
  StyledOrnamentCircles,
  StyledOrnamentWaves,
  StyledOrnamentSolidLine,
  StyledOrnamentArrow,
  StyledOrnamentWave,
  StyledOrnamentDottedLineLight,
  StyledOrnamentDottedLineBold,
} from './style/HomePage.styled';

export function HomePage() {
  return (
    <HomeSection>
      <TextBox>
        <Title>Organize your life, your work</Title>
        <MainText>I help you to become focused, organized, and calm</MainText>
        <AddText>
          with love, your Planner <BsFillSuitHeartFill />
        </AddText>
        <Btn to={'/today'}>Get start</Btn>
      </TextBox>

      <ImageBox>
        <StyledOrnamentDots width="100" />
        <StyledOrnamentCircles width="150" />
        <StyledOrnamentWaves width="100" />
        <StyledOrnamentSolidLine width="100" />
        <StyledOrnamentArrow width="100" />
        <StyledOrnamentWave width="100" />
        <StyledOrnamentDottedLineLight width="100" />
        <StyledOrnamentDottedLineBold width="100" />
      </ImageBox>
    </HomeSection>
  );
}
