import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import ImageCarousel from "../../components/image-carousel/image-carousel";

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
  const [contentData, setContentData] = useState<PageData>(initialData);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getData = async () => {
    try {
      let newContentData = [];
      switch (pageType) {
        case ContentPageTypes.Portfolio:
          newContentData = await GetPortfolioByID(ID);
          break;
        case ContentPageTypes.Blog:
          newContentData = await GetBlogById(ID);
          break;
        default:
          return;
      }

      setContentData(newContentData);
      setIsLoaded(true);
    } catch ({ status, statusText }) {
      const newErrorMessage = `${status}: ${statusText}`;
      setErrorMessage(newErrorMessage);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
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
    margin-top: 2vmax;
    width: 96%;
  `;

  const TitleContainer = styled.span`
    text-align: center;
    font-weight: bold;
    margin-top: 1vmax;

    @media (min-width: 0px) and (max-width: 910px){
      font-size: 26px;
    }
  
    @media (min-width: 910px) and (max-width: 1537px){
      font-size: 48px;
    }
  
    @media (min-width: 1537px){
      font-size: 72px;
    }
  `;

  const CreatedDateContainer = styled.span`
    margin-top: 1vmax;
    @media (min-width: 0px) and (max-width: 910px){
      font-size: 14px;
    }
  
    @media (min-width: 910px) and (max-width: 1537px){
      font-size: 18px;
    }
  
    @media (min-width: 1537px){
      font-size: 28px;
    }
  `;

  const ImageCarouselContainer = styled.div`
    margin-top: 2vmax;
    width: 70vw;
    max-width: 1800px;
  `;

  const ContentTextContainer = styled.p`
    margin-top: 2vmax;
    width: 90%;
    @media (min-width: 0px) and (max-width: 910px){
      font-size: 12px;
    }

    @media (min-width: 910px) and (max-width: 1537px){
      font-size: 18px;
    }

    @media (min-width: 1537px){
      font-size: 26px;
    }

   
  `;

  const simplifyDate = (dateString: string): string => {
    const splitData = dateString.split("T");
    return splitData[0];
  };

  return (
    <ContentPageContainer>
      <StyledTileContainer>
        {isLoaded ? (
          <>
            <TitleContainer>{contentData.title}</TitleContainer>
            <CreatedDateContainer>
              {contentData.created_at &&
                `Created at: ${simplifyDate(contentData.created_at)}`}
            </CreatedDateContainer>
            <ImageCarouselContainer>
              <ImageCarousel images={contentData.imgs} />
            </ImageCarouselContainer>
            <ContentTextContainer>
              {contentData.description}
            </ContentTextContainer>
          </>
        ) : (
          <TitleContainer>{errorMessage}</TitleContainer>
        )}
      </StyledTileContainer>
    </ContentPageContainer>
  );
};

export default ContentPage;
