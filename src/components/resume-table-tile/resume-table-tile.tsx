import { FC, useContext, useEffect } from "react";
import styled from "styled-components";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

import IconLinks from "../icon-links/icon-links";

import LinkIconLight from "../../assets/LinkIcon-LightMode.png";
import LinkIconDark from "../../assets/LinkIcon-DarkMode.png";
import { TileHolder } from "../styles/globalStyles";

export interface ResumeTableTileProps {
  title: string | null | undefined;
  sub_description: string | null | undefined;
  link?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  body_points?: string[];
}

const ResumeTableTile: FC<ResumeTableTileProps> = ({
  title,
  sub_description,
  link,
  start_date,
  end_date,
  body_points = [],
}) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const SecondaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const SubDescriptionContainer = styled.span`
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
    if (!start_date) return "";

    let displayedDateString = start_date;

    if (end_date) {
      displayedDateString += ` - ${end_date}`;
    }

    return displayedDateString;
  };

  return (
    <TileHolder isDarkMode={isDarkMode}>
      <TitleContainer> {title} </TitleContainer>
      <SecondaryContainer>
        <SubDescriptionContainer>
          {sub_description}
          {link && (
            <IconLinkContainer>
              <IconLinks iconArray={linkIconData} />
            </IconLinkContainer>
          )}
        </SubDescriptionContainer>
        {start_date && (
          <DurationContainer>{formatDateString()}</DurationContainer>
        )}
      </SecondaryContainer>

      {body_points.length > 0 && (
        <BulletPointContainer>
          <ul>
            {body_points.map((bodyString) => {
              return <li>{bodyString}</li>;
            })}
          </ul>
        </BulletPointContainer>
      )}
    </TileHolder>
  );
};

export default ResumeTableTile;
