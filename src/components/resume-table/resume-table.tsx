import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ResumeTableTile, {
  ResumeTableTileProps,
} from "../resume-table-tile/resume-table-tile";
import SkillsBubbles, {
  SkillsBubblesProps,
} from "../skills-bubbles/skills-bubbles";

import { DarkModeProps } from "../../components/styles/LightDarkThemes";
import DarkModeContext from "../../contexts/darkmode";

import {GetExperiences, GetResumeProjects, GetActivities, GetSkills} from "../../api/resume_api";

const dataTypes = {
  experiences: "EXPERIENCES",
  projects: "PROJECTS",
  activities: "ACTIVITIES",
  skills: "SKILLS",
};

interface resumeDataState {
  type: string;
  values: ResumeTableTileProps[] | SkillsBubblesProps[];
}

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
]

const ResumeTable = () => {
  const [isLarge, setIsLarge] = useState(true);
  const [resumeData, setResumeData] = useState(initialData);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    window.addEventListener("resize", resizeTable);
    return () => {
      window.removeEventListener("resize", resizeTable);
    };
  }, []);

  useEffect(() => {
    resizeTable();
  }, []);

  const getData = async () => {
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
  }

  useEffect(() => {
    getData();
  },[])


  const resizeTable = () => {
    const isLarge = window.innerWidth > 910;
    setIsLarge(isLarge);
  };

  const isDefaultTile = (
    dataValue: ResumeTableTileProps | SkillsBubblesProps
  ): dataValue is ResumeTableTileProps => {
    return (dataValue as ResumeTableTileProps).body_points !== undefined;
  };

  const isSkillTile = (
    dataValue: ResumeTableTileProps | SkillsBubblesProps
  ): dataValue is SkillsBubblesProps => {
    return (dataValue as SkillsBubblesProps).languages !== undefined;
  };

  const renderTileComponent = (tileType: string) => {
    const tileDataIndex = resumeData.findIndex(({ type }) => type === tileType);

    if (tileDataIndex === -1) {
      return;
    }

    const { values } = resumeData[tileDataIndex];

    switch (tileType) {
      case dataTypes.skills:
        return values.map(
          (skills: SkillsBubblesProps | ResumeTableTileProps) => {
            return (
              isSkillTile(skills) && (
                <SkillsBubbles
                  languages={skills.languages}
                  frameworks={skills.frameworks}
                  tools={skills.tools}
                />
              )
            );
          }
        );
      default:
        return values.map((data: SkillsBubblesProps | ResumeTableTileProps) => {
          return (
            isDefaultTile(data) && (
              <ResumeTableTile
                body_points={data.body_points}
                title={data.title}
                sub_description={data.sub_description}
                link={data.link}
                start_date={data.start_date}
                end_date={data.end_date}
              />
            )
          );
        });
    }
  };

  const renderResumeComponents = () => {
    const { experiences, skills, projects, activities } = dataTypes;

    let order = [[skills, experiences, projects, activities]];

    if (isLarge) {
      order = [
        [experiences, projects],
        [skills, activities],
      ];
    }

    return order.map((columns) => {
      return (
        <ColumnContainer>
          {columns.map((tileName) => {
            return (
              <TilesWrapper>
                <TileHeader isDarkMode={isDarkMode}> {tileName} </TileHeader>
                {renderTileComponent(tileName)}
              </TilesWrapper>
            );
          })}
        </ColumnContainer>
      );
    });
  };

  const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 60px;
    margin-bottom: 20px;
    width: 90%;
  `;

  const ColumnContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

  const TilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    border-radius: 10px;
  `;

  const TileHeader = styled.span<DarkModeProps>`
    font-size: 1.7em;
    font-weight: bold;
    color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#000000")};
    margin-bottom: 10px;
    margin-top: 10px;
  `;

  return <TableContainer>{renderResumeComponents()}</TableContainer>;
};

export default ResumeTable;
