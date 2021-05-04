import { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import ImageCarousel from "../../components/image-carousel/image-carousel";

import DarkModeContext from "../../contexts/darkmode";
import { TileHolder } from "../../components/styles/globalStyles";

import { GetPortfolioByID } from "../../api/portfolio_api";
import { GetBlogById } from "../../api/blog_api";

import { ContentPageTypes } from "../../enum/enum";

interface ParamaterFields {
  ID: string;
}

interface ContentPageProps {
  pageType: ContentPageTypes;
}

interface PageData {
  title: string | undefined;
  description: string | undefined;
  imgs: string[];
  created_at: string | undefined;
}

const initialData = {
  title: undefined,
  description: undefined,
  imgs: [],
  created_at: undefined,
};

const ContentPage: FC<ContentPageProps> = ({ pageType }) => {
  const { ID } = useParams<ParamaterFields>();
  const { isDarkMode } = useContext(DarkModeContext);

  const [contentData, setContentData] = useState<PageData>(initialData);

  const getData = async () => {
    let newContentData = [];

    console.log("PAGE TYPE: " + pageType);

    switch (pageType) {
      case ContentPageTypes.Portfolio:
        newContentData = await GetPortfolioByID(ID);
        break;
      case ContentPageTypes.Blog:
        newContentData = await GetBlogById(ID);
        break;
    }

    setContentData(newContentData);
  };

  useEffect(() => {
    getData();
  }, []);

  const ContentPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  `;

  const StyledTileContainer = styled(TileHolder)`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 96%;
  `;

  const TitleContainer = styled.span`
    text-align: center;
    font-size: 6vw;
    font-weight: bold;
  `;

  const CreatedDateContainer = styled.span`
    margin-top: 20px;
    @media (max-width: 910px) {
      font-size: 14px;
    }

    @media (max-width: 1536px) {
      font-size: 20px;
    }

    font-size: 24px;
  `;

  const ImageCarouselContainer = styled.div`
    margin-top: 60px;
    width: 70vw;
  `;

  const ContentTextContainer = styled.p`
    margin-top: 60px;
    width: 90%;
    @media (max-width: 910px) {
      font-size: 16px;
    }

    @media (max-width: 1536px) {
      font-size: 20px;
    }

    font-size: 24px;
  `;

  return (
    <ContentPageContainer>
      <StyledTileContainer isDarkMode={isDarkMode}>
        <TitleContainer>{contentData.title}</TitleContainer>
        <CreatedDateContainer>
          {contentData.created_at && `Created at: ${contentData.created_at}`}
        </CreatedDateContainer>
        <ImageCarouselContainer>
          <ImageCarousel images={contentData.imgs} />
        </ImageCarouselContainer>
        <ContentTextContainer>{contentData.description}</ContentTextContainer>
      </StyledTileContainer>
    </ContentPageContainer>
  );
};

export default ContentPage;
