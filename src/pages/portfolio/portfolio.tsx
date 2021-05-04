import { useEffect, useState } from "react";

import ContentTile from "../../components/content-tile/content-tile";
import { ContentTileContainer } from "../../components/styles/globalStyles";

import { GetPortfolio } from "../../api/portfolio_api";

interface PortfolioDataFields{
  id: number,
  imgs: string[] | undefined;
  title: string | undefined;
  description: string | undefined;
}


const PortfolioPage = () => {

  const [portfolioData, setPortfolioData] = useState<PortfolioDataFields[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const newPortfolioData = await GetPortfolio();
    setPortfolioData(newPortfolioData);
  };

  return (
    <ContentTileContainer>
      {
        portfolioData.map(({id,title,imgs,description}) => {
          return <ContentTile
            isLeftAligned={true}
            id={id}
            imgs={imgs}
            title={title}
            content={description}
            url="/portfolio"
          />
        })
      }
    </ContentTileContainer>
  );
};

export default PortfolioPage;
