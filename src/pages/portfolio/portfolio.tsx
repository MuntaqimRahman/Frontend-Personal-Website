import styled from "styled-components";


import ContentTile from "../../components/content-tile/content-tile";

const PortfolioPage = () => {

  const ContentTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 4vw;
    margin-right: 4vw;
    width: 92vw;
  `;

  return (
    <ContentTileContainer>
      <ContentTile match = {{url: "/portfolio"}} isLeftAligned={false} imgs={["https://i.stack.imgur.com/WjHQS.jpg?s=32&g=1"]} id = {1} title={"WE THE PEOPLE WHEN IN THE COURSE OF HUMAN EVENTS IT BECOMES"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in massa finibus urna lobortis congue. Nulla vulputate ante felis, sit amet mollis massa pretium eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc egestas mi sit amet malesuada ornare. Sed pulvinar lacinia erat a facilisis. Curabitur mollis augue at sem pulvinar ultrices. Donec eu metus lacinia sapien pulvinar ullamcorper. Praesent hendrerit sem sed varius gravida.Morbi sodales ac mi vel venenatis. Quisque et imperdiet diam. Donec lacinia neque nulla, nec vulputate sem hendrerit ut. Vestibulum eget ligula vel nulla blandit porttitor eget id nulla. Etiam et hendrerit dui. Nam pretium sodales porta. Donec a justo in nibh cursus suscipit. Nullam id sem vel felis posuere sollicitudin. Integer diam mauris, aliquet sed est nec, dictum tempor urna. Suspendisse venenatis ultricies lorem eu sodales. Aenean aliquet felis ac placerat dignissim. In a rhoncus sem.Curabitur eget lacus luctus, euismod felis vitae, tempor ipsum. Donec vel sapien sit amet mauris sagittis ullamcorper quis nec odio. Etiam sodales rutrum ornare. Nulla pellentesque auctor augue, "} />
    </ContentTileContainer>
  );
};

export default PortfolioPage;
