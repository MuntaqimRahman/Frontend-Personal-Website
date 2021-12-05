import { FC, useContext } from "react";
import styled from "styled-components";

import DarkModeContext from "../../contexts/darkmode";

import IconLinks from "../icon-links/icon-links";

import LinkIconLight from "../../assets/LinkIcon-LightMode.svg";
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
    margin-left: 1vmax;

    @media (min-width: 1537px) {
      font-size: 22px;
    }
  `;

  const IconLinkContainer = styled.div`
    display: inline;
    margin-left: 7px;
  `;

  const DurationContainer = styled.div`
    margin-right: 1vmax;
    margin-top: 0.3vmax;
    font-size: 0.9em;

    @media (min-width: 1537px) {
      font-size: 22px;
    }
  `;

  const BulletPointContainer = styled.div`
    margin-left: 1vmax;

    @media (min-width: 1537px) {
      font-size: 20px;
    }
  `;

  const TitleContainer = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 1vmax;
    margin-top: 0.5vmax;

    @media (min-width: 1537px) {
      font-size: 32px;
    }
  `;

  const StyledTileContainer = styled(TileHolder)`
    margin-bottom: 20px;
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
    <StyledTileContainer>
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
    </StyledTileContainer>
  );
};

export default ResumeTableTile;
