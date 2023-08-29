import { baseAxios } from "./baseAxios";

export const getReaderBoard = async () => {
  const response = await baseAxios
    .get("/api/reader-board/top")
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
