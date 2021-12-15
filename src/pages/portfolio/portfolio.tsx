import { useEffect, useState, useContext } from "react";
import StyledClipLoader from "../../components/clip-loader/clip-loader";

import ContentTile from "../../components/content-tile/content-tile";
import { ContentTileContainer } from "../../components/styles/globalStyles";

import DarkModeContext from "../../contexts/darkmode";

import { GetPortfolio } from "../../api/portfolio_api";

interface PortfolioDataFields {
  id: number;
  imgs: string[] | undefined;
  title: string | undefined;
  description: string | undefined;
}

const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioDataFields[]>([]);
  const [isGettingData, setIsGettingData] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const newPortfolioData = await GetPortfolio();
      setPortfolioData(newPortfolioData);
      setIsGettingData(false);
      setIsDataLoaded(true);
    } catch (err) {
      console.log(err);
      setIsGettingData(false);
      setIsDataLoaded(false);
    }
  };

  return (
    <ContentTileContainer>
      {isGettingData ? (
        <StyledClipLoader isDarkMode={isDarkMode} />
      ) : (
        isDataLoaded &&
        portfolioData.map(({ id, title, imgs, description }) => {
          return (
            <ContentTile
              key={id}
              isLeftAligned={true}
              id={id}
              imgs={imgs}
              title={title}
              content={description}
              url="/portfolio"
            />
          );
        })
      )}
    </ContentTileContainer>
  );
};

export default PortfolioPage;
