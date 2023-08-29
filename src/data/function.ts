import { FortuneProductData } from "./type";

export const getRandomCards = (fortuneItems: FortuneProductData[]) => {
  const randomNumbers: number[] = [];
  console.log("start while");

  while (randomNumbers.length < 8) {
    const randomNumber =
      Math.floor(Math.random() * (fortuneItems.length - 1 - 0 + 1)) + 0;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  console.log("finish while");

  randomNumbers.push(...randomNumbers);
  randomNumbers.sort(() => Math.random() - 0.5);

  return randomNumbers;
};
