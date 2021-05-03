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

const dataTypes = {
  experiences: "EXPERIENCES",
  projects: "PROJECTS",
  activities: "ACTIVITIES",
  skills: "SKILLS",
};

interface initialData {
  type: string;
  values: ResumeTableTileProps[] | SkillsBubblesProps[];
}

const tempInitialData: initialData[] = [
  {
    type: dataTypes.experiences,
    values: [
      {
        bodyPoints: [
          "four score and 25 years ago we hold these truths to be self evident",
        ],
        title: "Full Stack Developer",
        company: "Empire Life",
        link: "https://www.google.ca/",
        startDate: "May 2020",
        endDate: "June 2021",
      },{
        bodyPoints: [
          "four score and 25 years ago we hold these truths to be self evident",
        ],
        title: "Full Stack Developer",
        company: "Empire Life",
        link: "https://www.google.ca/",
        startDate: "May 2020",
        endDate: "June 2021",
      },
    ] as ResumeTableTileProps[],
  },
  {
    type: dataTypes.projects,
    values: [
      {
        bodyPoints: [
          "four score and 25 years ago we hold these truths to be self evident",
        ],
        title: "Full Stack Developer",
        company: "Empire Life",
        link: "https://www.google.ca/",
        startDate: "May 2020",
        endDate: "June 2021",
      },
    ] as ResumeTableTileProps[],
  },
  {
    type: dataTypes.activities,
    values: [
      {
        bodyPoints: [
          "four score and 25 years ago we hold these truths to be self evident",
        ],
        title: "Full Stack Developer",
        company: "Empire Life",
        link: "https://www.google.ca/",
        startDate: "May 2020",
        endDate: "June 2021",
      },
    ] as ResumeTableTileProps[],
  },
  {
    type: dataTypes.skills,
    values: [
      {
        languages: ["C++", "JS"],
        frameworks: [
          "React",
          "ASP.NET",
          "Node",
          "Django",
          "ASP.NET",
          "Node",
          "Django",
          "ASP.NET",
          "Node",
          "Django",
        ],
        tools: ["VSCode", "Burpsuite"],
      },
    ] as SkillsBubblesProps[],
  },
];

const ResumeTable = () => {
  const [isLarge, setIsLarge] = useState(true);
  const [resumeData, setResumeData] = useState(tempInitialData);
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

  const resizeTable = () => {
    const isLarge = window.innerWidth > 910;
    setIsLarge(isLarge);
  };

  const isDefaultTile = (
    dataValue: ResumeTableTileProps | SkillsBubblesProps
  ): dataValue is ResumeTableTileProps => {
    return (dataValue as ResumeTableTileProps).bodyPoints !== undefined;
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
                bodyPoints={data.bodyPoints}
                title={data.title}
                company={data.company}
                link={data.link}
                startDate={data.startDate}
                endDate={data.endDate}
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
