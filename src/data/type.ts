export type FORTUNE_TYPE = 'LOVE' | 'MONEY' | 'SUCCESS';

export type FortuneProductData = {
  itemId: number;
  type: FORTUNE_TYPE;
  bigTitle: string;
  fortunePhoto: string;
  comments: string;
};
