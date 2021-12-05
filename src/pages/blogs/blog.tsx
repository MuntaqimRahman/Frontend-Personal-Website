import { useEffect, useState, useContext } from "react";
import StyledClipLoader from "../../components/clip-loader/clip-loader";

import ContentTile from "../../components/content-tile/content-tile";
import { ContentTileContainer } from "../../components/styles/globalStyles";

import DarkModeContext from "../../contexts/darkmode";

import { GetBlog } from "../../api/blog_api";

interface BlogDataFields {
  id: number;
  imgs: string[] | undefined;
  title: string | undefined;
  description: string | undefined;
}

const BlogPage = () => {
  const [blogData, setBlogData] = useState<BlogDataFields[]>([]);
  const [isGettingData, setIsGettingData] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const newBlogData = await GetBlog();
      setBlogData(newBlogData);
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
        blogData.map(({ id, title, imgs, description }) => {
          return (
            <ContentTile
              isLeftAligned={false}
              id={id}
              imgs={imgs}
              title={title}
              content={description}
              url="/blogs"
            />
          );
        })
      )}
    </ContentTileContainer>
  );
};

export default BlogPage;
