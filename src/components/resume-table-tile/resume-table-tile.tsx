import { FC, useContext } from "react";
import styled from "styled-components";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

import IconLinks from "../icon-links/icon-links";

import LinkIconLight from "../../assets/LinkIcon-LightMode.png";
import LinkIconDark from "../../assets/LinkIcon-DarkMode.png";
import { TileHolder } from "../styles/globalStyles";

export interface ResumeTableTileProps {
  title: string | null | undefined;
  company: string | null | undefined;
  link?: string | null | undefined;
  startDate?: string | null | undefined;
  endDate?: string | null | undefined;
  bodyPoints?: string[];
}

const ResumeTableTile: FC<ResumeTableTileProps> = ({
  title,
  company,
  link,
  startDate,
  endDate,
  bodyPoints = [],
}) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const SecondaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const CompanyContainer = styled.span`
    font-size: 1.1em;
    margin-left: 30px;
  `;

  const IconLinkContainer = styled.div`
    display: inline;
    margin-left: 7px;
  `;

  const DurationContainer = styled.div`
    margin-right: 20px;
    font-size: 0.9em;
  `;

  const BulletPointContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
  `;

  const TitleContainer = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 10px;
  `;

  const linkIconData = [
    {
      link: link,
      icon: isDarkMode ? LinkIconDark : LinkIconLight,
      width: "15em",
      height: "15em",
      alt: "link",
    },
  ];

  const formatDateString = () => {
    if (!startDate) return "";

    let displayedDateString = startDate;

    if (endDate) {
      displayedDateString += ` - ${endDate}`;
    }

    return displayedDateString;
  };

  return (
    <TileHolder isDarkMode={isDarkMode}>
      <TitleContainer> {title} </TitleContainer>
      <SecondaryContainer>
        <CompanyContainer>
          {company}
          {link && (
            <IconLinkContainer>
              <IconLinks iconArray={linkIconData} />
            </IconLinkContainer>
          )}
        </CompanyContainer>
        {startDate && (
          <DurationContainer>{formatDateString()}</DurationContainer>
        )}
      </SecondaryContainer>

      {bodyPoints.length > 0 && (
        <BulletPointContainer>
          <ul>
            {bodyPoints.map((bodyString) => {
              return <li>{bodyString}</li>;
            })}
          </ul>
        </BulletPointContainer>
      )}
    </TileHolder>
  );
};

export default ResumeTableTile;
