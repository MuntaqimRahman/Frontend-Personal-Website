import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import LandingComponent from "../../components/landing-component/landing-component";
import ResumeTable from "../../components/resume-table/resume-table";

import { introText} from "../../static/static-text";
import {dataTypes, resumeDataState} from "../../static/resume-data-information";

import {
  GetExperiences,
  GetResumeProjects,
  GetActivities,
  GetSkills,
} from "../../api/resume_api";


const initialData = [
  {
    type: dataTypes.experiences,
    values: [],
  },
  {
    type: dataTypes.projects,
    values: [],
  },
  {
    type: dataTypes.activities,
    values: [],
  },
  {
    type: dataTypes.skills,
    values: [],
  },
];

const AboutPage = () => {
  const [isGettingData, setIsGettingData] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<resumeDataState[]>(initialData)


  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    try {
      const experiences = await GetExperiences();
      const resumeProjects = await GetResumeProjects();
      const activities = await GetActivities();
      const skills = await GetSkills();

      const newResumeState = [
        {
          type: dataTypes.experiences,
          values: experiences,
        },
        {
          type: dataTypes.projects,
          values: resumeProjects,
        },
        {
          type: dataTypes.activities,
          values: activities,
        },
        {
          type: dataTypes.skills,
          values: skills,
        },
      ];

      setResumeData(newResumeState);
      setIsGettingData(false);
      setIsDataLoaded(true);
    } catch (err) {
      console.log(err);
      setIsGettingData(false);
      setIsDataLoaded(false);
    }
  };

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

      <IntroText >Resume</IntroText>
      <ResumeTable isGettingData={isGettingData} isDataLoaded={isDataLoaded} resumeData={resumeData}/>
    </AboutPageContainer>  
  );
};

export default AboutPage;
