import { APIParser } from "./api_parser";
const API_URL = process.env.REACT_APP_API_URL;

export const GetExperiences = async () => {
  const response = await fetch(`${API_URL}/experiences`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};

export const GetResumeProjects = async () => {
  const response = await fetch(`${API_URL}/resume_projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};

export const GetActivities = async () => {
  const response = await fetch(`${API_URL}/activities`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};

export const GetSkills = async () => {
  const response = await fetch(`${API_URL}/skills`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await APIParser(response);

  return post;
};
