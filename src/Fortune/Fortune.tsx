import React, { useEffect, useState } from "react";
import Header from "../Home/components/Header";
import Jackpot from "./components/JackPot";
import styled from "styled-components";
import { getNowWaitingPosition } from "../api/waitingRoomController";
import { FortuneProductData, FORTUNE_TYPE } from "../data/type";
import NextButton from "../CardgamePage/components/NextButton";
import FortuneResultPage from "../FortuneResultPage/FortuneResultPage";
import { useNavigate } from "react-router-dom";

const Fortune = ({
  itemId,
  initPos,
  fortuneItems,
}: {
  itemId: number;
  initPos: number;
  fortuneItems: FortuneProductData[];
}) => {
  const navigate = useNavigate();
  console.log("FORTUNE ID : ", itemId);
  console.log(fortuneItems);
  const [waitingPosition, setWaitingPosition] = useState<number>(initPos);
  const [fortuneClicked, setFortuneClicked] = useState<FORTUNE_TYPE | null>(
    null,
  );
  const [fortuneList, setFortuneList] =
    useState<FortuneProductData[]>(fortuneItems);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getNowWaitingPosition(waitingPosition);
      setWaitingPosition(response);
      console.log("FORTUNE LOG : ", response);

      if (response === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [waitingPosition]);

  const handleFortuneClicked = (fortune: FORTUNE_TYPE) => {
    setFortuneClicked(fortune);
    const filteredItems = fortuneItems.filter((item) => item.type === fortune);
    setFortuneList(filteredItems);
  };

  return (
    <>
      <Header />
      <FortuneWrapper>
        {fortuneClicked === null ? (
          <div style={{ width: "100%", marginBottom: "100px" }}>
            <JackpotGuide>
              <GuideText>당신에게 찾아온 깜짝 선물</GuideText>
              <GuideTextBold>오늘의 행운을 잡아보세요</GuideTextBold>
            </JackpotGuide>
            <Jackpot fortune={fortuneItems} setClick={handleFortuneClicked} />
          </div>
        ) : (
          <FortuneResultPage fortune={fortuneClicked} itemList={fortuneList} />
        )}
        <NextButton
          isAbled={waitingPosition <= 0}
          text={waitingPosition.toString()}
          onClick={() => {
            navigate(`/product/${itemId}`);
          }}
        />
      </FortuneWrapper>
    </>
  );
};

export default Fortune;

const FortuneWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 54px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  align-items: center;
  position: relative;
`;

const JackpotGuide = styled.div`
  height: 95px;
  color: #000;
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GuideText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.018px;
  color: #6b7583;
`;

const GuideTextBold = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.022px;
  margin-top: 12px;
`;
