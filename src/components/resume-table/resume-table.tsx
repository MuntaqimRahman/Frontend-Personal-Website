import { FC, useEffect, useState, useContext } from "react";
import moment from "moment";
import StyledClipLoader from "../clip-loader/clip-loader";
import styled from "styled-components";
import ResumeTableTile, {
  ResumeTableTileProps,
} from "../resume-table-tile/resume-table-tile";
import SkillsBubbles, {
  SkillsBubblesProps,
} from "../skills-bubbles/skills-bubbles";

import DarkModeContext from "../../contexts/darkmode";

import {
  dataTypes,
  resumeDataState,
} from "../../static/resume-data-information";

interface ResumeTableProps {
  isGettingData: boolean;
  isDataLoaded: boolean;
  resumeData: resumeDataState[];
}

const ResumeTable: FC<ResumeTableProps> = ({
  isGettingData,
  isDataLoaded,
  resumeData,
}) => {
  const [isLarge, setIsLarge] = useState<boolean>(true);

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
    return (dataValue as ResumeTableTileProps).body_points !== undefined;
  };

  const isSkillTile = (
    dataValue: ResumeTableTileProps | SkillsBubblesProps
  ): dataValue is SkillsBubblesProps => {
    return (dataValue as SkillsBubblesProps).languages !== undefined;
  };

  const formatDateString = (dateString: string): string | null => {
    const formattedDate = moment(dateString).format("MMM YYYY");

    if (formattedDate === "Invalid date") {
      return null;
    }

    return formattedDate;
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
                start_date={
                  data.start_date && formatDateString(data.start_date)
                }
                end_date={data.end_date && formatDateString(data.end_date)}
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
                <TileHeader> {tileName} </TileHeader>
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
    padding-left: 1vmax;
    border-radius: 10px;
  `;

  const TileHeader = styled.span`
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 10px;

    @media (min-width: 0px) and (max-width: 1537px) {
      font-size: 32px;
    }

    @media (min-width: 1537px) {
      font-size: 34px;
    }
  `;

  return (
    <TableContainer>
      {isGettingData ? (
        <StyledClipLoader isDarkMode={isDarkMode} />
      ) : (
        isDataLoaded && renderResumeComponents()
      )}
    </TableContainer>
  );
};

export default ResumeTable;
