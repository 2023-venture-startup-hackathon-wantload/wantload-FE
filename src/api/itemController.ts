import { CATEGORY_TYPE } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getCategoryItems = async (itemType: CATEGORY_TYPE) => {
  const response = await baseAxios
    .get(`/api/item/${itemType}`)
    .then((response) => response.data.data);
  console.log(response);
  return response;
};

export const getItemDetail = async (itemId: number) => {
  const response = await baseAxios
    .get(`/api/item/detail/${itemId}`)
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
