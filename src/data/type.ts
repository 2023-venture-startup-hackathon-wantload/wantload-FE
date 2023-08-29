export type FORTUNE_TYPE = "LOVE" | "MONEY" | "SUCCESS";
export type CATEGORY_TYPE = "HOME" | "FOOD" | "BEAUTY" | "LIFE" | "HOBBY";

export type FortuneProductData = {
  itemId: number;
  type: FORTUNE_TYPE;
  bigTitle: string;
  fortunePhoto: string;
  smallTitle: string;
  comments: string;
};

export type MainProductData = {
  itemId: number;
  name: string;
  price: number;
  itemPhoto: string;
};

export type WaitingPosition = {
  userNum: number;
};

export type ProductDeatil = {
  itemId: number;
  name: string;
  oringinPrice: number;
  discount: number;
  sellPrice: number;
  company: string;
  starPoint: number;
  itemPhoto: string;
};

export type UserReader = {
  nickName: string;
  score: number;
};
