import { useContext } from "react";
import styled from "styled-components";
import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

import LandingComponent from "../../components/landing-component/landing-component";
import ResumeTable from "../../components/resume-table/resume-table";

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porttitor turpis quis accumsan. Morbi dolor nulla, rhoncus et dui at, blandit tincidunt enim. Sed a volutpat libero. Etiam magna arcu, blandit ut velit quis, pretium gravida ipsum. Aliquam massa odio, ullamcorper ac feugiat id, luctus sit amet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id molestie mauris, in vulputate orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac.";

const AboutPage = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const DescriptionContainer = styled.p`
    margin-top: 40px;
    margin-left: 60px;
    width: 90%;
  `;

  const IntroText = styled.span<DarkModeProps>`
    font-size: 250%;
    font-weight: bold;
    display: block;
    color: ${({isDarkMode}) => isDarkMode ? "#FFFFFF" : "#000000"};
  `;

  const MainText = styled.span`
    font-size: 115%;
  `;

  return (
    <>
      <LandingComponent />
      <DescriptionContainer>
        <IntroText isDarkMode={isDarkMode}>Welcome To My Website</IntroText>
        <MainText>{descriptionText} </MainText>
      </DescriptionContainer>
      
      <ResumeTable/>
    </>
  );
};

export default AboutPage;
