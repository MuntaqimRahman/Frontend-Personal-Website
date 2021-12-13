import { FC } from "react";
import styled from "styled-components";
import { SimpleLink } from "../styles/globalStyles";
import { TileHolder } from "../styles/globalStyles";

interface ContentTitleProps {
  id: number;
  title: string | undefined;
  content: string | undefined;
  imgs?: string[] | undefined;
  isLeftAligned: boolean;
  url: string | undefined;
}

interface LeftAlignedProps {
  isLeftAligned: boolean;
}

const ContentContainer = styled.div<LeftAlignedProps>`
    display: flex;
    flex-direction: ${({ isLeftAligned }) =>
      isLeftAligned ? "row" : "row-reverse"};
    
    align-items: center;

    height: 13vw;
  `;

  const ContentTileContainer = styled(TileHolder)<LeftAlignedProps>`
    display: flex;
    cursor: pointer;
    padding-left: ${({ isLeftAligned }) => (isLeftAligned ? "1.5vmax" : "0px")};
    padding-right: ${({ isLeftAligned }) =>
      isLeftAligned ? "0px" : "1.5vmax"};
    transition: background, color, box-shadow 0.3s linear;

    &:hover {
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%);
      transition: box-shadow 0.3s linear;
    }
  `;

  const TextContainer = styled.div<LeftAlignedProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-left: ${({ isLeftAligned }) => (isLeftAligned ? "3vw" : "2vw")};
    margin-right: ${({ isLeftAligned }) => (isLeftAligned ? "2vw" : "3vw")};
    width: 76%;
    height: 85%;

    overflow: hidden;
  `;

  const TitleContainer = styled.div`
    position: relative;
    top: -0.6vw;
    display: flex;
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
    display: flex;
    font-size: 1.1vw;

    @media (max-width: 910px) {
      display: none;
    }
    height: 80%;
  `;

  const ComponentContainer = styled.div`
    width: 100%;
    align-items: center;
    margin-bottom: 2vmax;
  `;

  const ImageContainer = styled.div`
      margin: auto;
      align-self: center;
      width: 24%;
      height: 85%;
  `;

const ContentTile: FC<ContentTitleProps> = ({
  id,
  title,
  content,
  imgs,
  isLeftAligned,
  url,
}) => {

  return (
    <ComponentContainer>
      <SimpleLink to={`${url}/${id}`}>
        <ContentTileContainer isLeftAligned={isLeftAligned}>
          <ContentContainer isLeftAligned={isLeftAligned}>
            {Array.isArray(imgs) && imgs.length > 0 && (
              <ImageContainer>
                <img
                  src={imgs[0]}
                  width="100%"
                  height="100%"
                  alt="thumbnail"
                />
              </ImageContainer>
            )}
            <TextContainer isLeftAligned={isLeftAligned}>
              <TitleContainer>{title}</TitleContainer>
              <TextContentContainer>{content} </TextContentContainer>
            </TextContainer>
          </ContentContainer>
        </ContentTileContainer>
      </SimpleLink>
    </ComponentContainer>
  );
};

export default ContentTile;
