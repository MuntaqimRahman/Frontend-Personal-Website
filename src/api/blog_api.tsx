import { APIParser } from "./api_parser";
const API_URL = process.env.REACT_APP_API_URL;

export const GetBlog = async () => {
  const response = await fetch(`${API_URL}/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};

export const GetBlogById = async (id: string) => {
  const response = await fetch(`${API_URL}/blog/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};
