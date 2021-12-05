import { APIParser } from "./api_parser";
const API_URL = process.env.REACT_APP_API_URL;

export const GetPortfolio = async () => {
  const response = await fetch(`${API_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};

export const GetPortfolioByID = async (id: string) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};
