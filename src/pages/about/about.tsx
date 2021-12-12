import styled from "styled-components";

import LandingComponent from "../../components/landing-component/landing-component";

import { introText} from "../../static/static-text";


const AboutPage = () => {

  const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const DescriptionContainer = styled.p`
    margin-top: 40px;
    width: 90%;
  `;

  const IntroText = styled.span`
    text-align: center;
    font-weight: bold;
    display: block;

    @media (min-width: 0px) and (max-width: 1537px){
      font-size: 36px;
    }
  
  
    @media (min-width: 1537px){
      font-size: 42px;
    }
  `;

  const MainText = styled.span`
  @media (min-width: 0px) and (max-width: 910px){
    font-size: 18px;
  }

  @media (min-width: 910px) and (max-width: 1537px){
    font-size: 20px;
  }

  @media (min-width: 1537px){
    font-size: 24px;
  }
  `;

  return (
    <AboutPageContainer>
      <LandingComponent />
      <DescriptionContainer>
        <IntroText >Welcome To My Website</IntroText>
        <MainText>{introText} </MainText>
      </DescriptionContainer>
    </AboutPageContainer>  
  );
};

export default AboutPage;
