import { FC, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import ImageCarousel from "../../components/image-carousel/image-carousel";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";
import { TileHolder } from "../../components/styles/globalStyles";


interface ParamaterFields {
  ID: string;
}

const tempData = {
  title: "First ever blog post keep going keep going",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem nibh, ultricies eget imperdiet sed, convallis non purus. Nulla aliquam, lorem quis sagittis interdum, dolor est vehicula mi, id fringilla purus ligula vel lorem. Donec faucibus quis odio vitae pharetra. Nulla facilisi. Aenean dignissim dapibus sollicitudin. Nullam blandit tellus augue, quis tincidunt erat pellentesque non. Aenean ac tortor dictum, consequat augue vel, dapibus orci. Sed non vulputate ante, at pellentesque justo. Integer auctor libero eu tincidunt dapibus. Nulla facilisi. Sed consequat in sem eu pellentesque.",
  imgs: [
    "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/23/21/campaign_images/webdr01/26-desktop-backgrounds-that-will-make-you-not-hat-2-1152-1414115599-1_dblbig.jpg?resize=1200:*",
  ],
  created_at: "May 2011",
};

const ContentPage = () => {
  const { ID } = useParams<ParamaterFields>();
  const { isDarkMode } = useContext(DarkModeContext);

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
    @media(max-width: 910px){
        font-size: 14px;
    }

    @media(max-width: 1536px){
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
    @media(max-width: 910px){
        font-size: 16px;
    }

    @media(max-width: 1536px){
        font-size: 20px;
    }

    font-size: 24px;
  `;

  return (
    <ContentPageContainer>
      <StyledTileContainer isDarkMode={isDarkMode}>
        <TitleContainer>{tempData.title}</TitleContainer>
        <CreatedDateContainer>{`Created at: ${tempData.created_at}`}</CreatedDateContainer>
        <ImageCarouselContainer>
          <ImageCarousel images={tempData.imgs} />
        </ImageCarouselContainer>
        <ContentTextContainer>{tempData.content}</ContentTextContainer>
      </StyledTileContainer>
    </ContentPageContainer>
  );
};

export default ContentPage;
