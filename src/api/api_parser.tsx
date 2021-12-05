export const APIParser = async (response: Response) => {
  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(response);
};
