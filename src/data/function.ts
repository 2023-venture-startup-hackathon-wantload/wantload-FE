export const getRandomCards = () => {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 8) {
    const randomNumber = Math.floor(Math.random() * (25 - 0 + 1)) + 0;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  randomNumbers.push(...randomNumbers);
  randomNumbers.sort(() => Math.random() - 0.5);

  return randomNumbers;
};
