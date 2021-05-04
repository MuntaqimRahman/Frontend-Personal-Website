import { useEffect, useState } from "react";

import ContentTile from "../../components/content-tile/content-tile";
import { ContentTileContainer } from "../../components/styles/globalStyles";

import { GetBlog } from "../../api/blog_api";

interface BlogDataFields {
  id: number;
  imgs: string[] | undefined;
  title: string | undefined;
  description: string | undefined;
}

const BlogPage = () => {
  const [blogData, setBlogData] = useState<BlogDataFields[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const newBlogData = await GetBlog();
    setBlogData(newBlogData);
  };

  return (
    <ContentTileContainer>
      {blogData.map(({ id, title, imgs, description }) => {
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
      })}
    </ContentTileContainer>
  );
};

export default BlogPage;
