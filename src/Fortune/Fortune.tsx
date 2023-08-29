import React from 'react';
import Header from '../Home/components/Header';
import Jackpot from './components/JackPot';
import styled from 'styled-components';

const Fortune: React.FC = () => {
  return (
    <>
      <Header />
      <FortuneWrapper>
        <JackpotGuide>
          <GuideText>당신에게 찾아온 깜짝 선물</GuideText>
          <GuideTextBold>오늘의 행운을 잡아보세요</GuideTextBold>
        </JackpotGuide>
        <Jackpot />
      </FortuneWrapper>
    </>
  );
};

export default Fortune;

const FortuneWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 54px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const JackpotGuide = styled.div`
  width: 315px;
  height: 95px;
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const GuideText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.018px;
`;

const GuideTextBold = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.022px;
`;
