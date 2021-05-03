import { FC, useContext } from "react";
import styled from "styled-components";
import {SimpleLink} from "../styles/globalStyles";
import { Route } from "react-router-dom";

import DarkModeContext from "../../contexts/darkmode";

import { TileHolder } from "../styles/globalStyles";

import ContentPage from "../../pages/content-page/content-page";

interface ContentTitleProps {
  match: {
    url: string;
  };
  id: number;
  title: string;
  content: string;
  imgs?: string[] | undefined;
  isLeftAligned: boolean;
}

interface LeftAlignedProps {
  isLeftAligned: boolean;
}

const ContentTile: FC<ContentTitleProps> = ({
  match,
  id,
  title,
  content,
  imgs,
  isLeftAligned,
}) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const ContentContainer = styled.div<LeftAlignedProps>`
    display: flex;
    flex-direction: ${({ isLeftAligned }) =>
      isLeftAligned ? "row" : "row-reverse"};
    height: 13vw;
  `;

  const ContentTileHolder = styled(TileHolder)<LeftAlignedProps>`
    cursor: pointer;
    padding-left: ${({ isLeftAligned }) => (isLeftAligned ? "20px" : "0px")};
    padding-right: ${({ isLeftAligned }) => (isLeftAligned ? "0px" : "20px")};
    padding-top: 20px;
  `;

  const TextContainer = styled.div<LeftAlignedProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: ${({ isLeftAligned }) => (isLeftAligned ? "4vw" : "0px")};
    margin-right: ${({ isLeftAligned }) => (isLeftAligned ? "0px" : "4vw")};
    width: 75vw;
    height: 100%;

    overflow: hidden;
  `;

  const TitleContainer = styled.div`
    display: block;
    font-size: 2vw;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 910px) {
      font-size: 4vw;
    }
  `;

  const TextContentContainer = styled.div`
    font-size: 1.1vw;

    @media (max-width: 910px) {
      display: none;
    }

    column-width: 1152px;
    height: 80%;
  `;

  return (
    <>
    <SimpleLink to={`/portfolio/${id}`}>
      <ContentTileHolder isLeftAligned={isLeftAligned} isDarkMode={isDarkMode}>
        <ContentContainer isLeftAligned={isLeftAligned}>
          {Array.isArray(imgs) && imgs.length > 0 && (
            <img src={imgs[0]} width="13%" height="100%" alt="content image" />
          )}
          <TextContainer isLeftAligned={isLeftAligned}>
            <TitleContainer>{title}</TitleContainer>
            <TextContentContainer>{content} </TextContentContainer>
          </TextContainer>
        </ContentContainer>
      </ContentTileHolder>
    </SimpleLink>
    
    </>
  );
};

export default ContentTile;
