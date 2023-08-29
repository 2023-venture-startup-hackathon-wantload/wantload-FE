import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Home/components/Header';
import Card from './components/Card';
import { ReactComponent as Clock } from '../assets/icon/icon_clock.svg';
// import Card from './components/Card';
import { getRandomCards } from '../data/function';
import NextButton from './components/NextButton';

const CardgamePage = () => {
  const MINUTES_IN_MS = 0.5 * 60 * 1000;
  const INITIAL_SAME_CARD_COUNT = 0;
  const INTERVAL = 1000;
  const [time, setTime] = useState<number>(MINUTES_IN_MS);
  const [cardList, setCardList] = useState<number[]>([]);
  const [isFirstCardClicked, setIsFirstCardClicked] = useState<boolean>(false);
  const [isSecondCardClicked, setIsSecondCardClicked] =
    useState<boolean>(false);
  const [firstCardIndex, setFirstCardIndex] = useState<number | null>(null);
  const [secondCardIndex, setSecondCardIndex] = useState<number | null>(null);
  const [sameCardCount, setSameCardCount] = useState<number>(
    INITIAL_SAME_CARD_COUNT,
  );
  const [correctCard, setCorrectCard] = useState<number[]>([]);

  const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const second = String(Math.floor((time / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (time <= 0) {
      clearInterval(timer);
      console.log('게임이 종료되었습니다.');
      console.log(sameCardCount);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  useEffect(() => {
    const cards = getRandomCards();
    setCardList(cards);
    setCorrectCard(Array.from({ length: 16 }, (_, index) => index));

    const timeout = setTimeout(() => {
      setCorrectCard([]);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (!isFirstCardClicked && !isSecondCardClicked) {
      setIsFirstCardClicked(true);
      setFirstCardIndex(index);
    } else if (isFirstCardClicked && !isSecondCardClicked) {
      setIsSecondCardClicked(true);
      setSecondCardIndex(index);
      if (
        firstCardIndex !== null &&
        cardList[firstCardIndex] === cardList[index]
      ) {
        setSameCardCount((prevCount) => prevCount + 10);
        const arr = [...correctCard, firstCardIndex, index];
        setCorrectCard(arr);
      }
      setTimeout(() => {
        setIsFirstCardClicked(false);
        setIsSecondCardClicked(false);
        setFirstCardIndex(null);
        setSecondCardIndex(null);
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <CardgameInfo>
        <div className="cardgame-header">
          <div className="time">
            <Clock />
            <div className="time-text">
              {minutes}:{second}
            </div>
          </div>
          <div className="score">
            <div>현재 스코어</div>
            <div className="score-num">{sameCardCount}</div>
          </div>
        </div>
        <div className="title">카드 뒤집기를 해보세요.</div>
        <CardContainer>
          {cardList.map((item, index) => (
            <Card
              card={item}
              key={index}
              isFlipped={
                (firstCardIndex !== null &&
                  (firstCardIndex === index || secondCardIndex === index)) ||
                correctCard.includes(index)
              }
              onClick={() => handleCardClick(index)}
            />
          ))}
        </CardContainer>
        {time === 0 && <NextButton />}
      </CardgameInfo>
    </>
  );
};

const CardgameInfo = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;

  & .cardgame-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  & .time {
    display: flex;
    justify-content: center;
    align-items: center;
    & .time-text {
      margin-left: 7px;
    }
  }

  & .score {
    display: flex;
    justify-content: center;
    align-items: center;
    & .score-num {
      margin-left: 7px;
      font-weight: 600;
    }
  }

  & .title {
    margin-top: 14px;
    margin-bottom: 9px;
    font-size: 22px;
    font-weight: 600;
  }
`;

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 92px);
  gap: 10px;
`;

export default CardgamePage;
