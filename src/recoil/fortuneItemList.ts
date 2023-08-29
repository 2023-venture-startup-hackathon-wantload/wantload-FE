import { atom } from 'recoil';
import { FortuneProductData } from '../data/type';

export const fortuneItemList = atom<FortuneProductData[]>({
  key: 'fortuneItemList',
  default: [],
});
