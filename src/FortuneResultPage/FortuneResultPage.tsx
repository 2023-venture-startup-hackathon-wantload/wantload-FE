import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Home/components/Header";
import { FortuneProductData, FORTUNE_TYPE } from "../data/type";
import Heart from "../assets/icon/icon_love.svg";
import Money from "../assets/icon/icon_money.svg";
import Thumbs from "../assets/icon/icon_thumbs_up.svg";

const FortuneResultPage = ({
  fortune,
  itemList,
}: {
  fortune: FORTUNE_TYPE;
  itemList: FortuneProductData[];
}) => {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * itemList.length));
  }, []);
  const randomItem = itemList[randomIndex];

  const getToday = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}년 ${month}월 ${day}일 오늘의 운세`;
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header />
      <FortuneResultContainer>
        <FortuneResultArea>
          <img
            className="fortune-img"
            src={
              fortune === "LOVE" ? Heart : fortune === "MONEY" ? Money : Thumbs
            }
          />
          <div className="fortune-header">
            {getToday()}
            <div className="fortune-title">{randomItem.bigTitle}</div>
          </div>
          <div
            style={{ width: "100%", height: "8px", backgroundColor: "#F5F6F8" }}
          />
          <div className="fortune-body">
            <div className="product-header">이런 상품 어때요?</div>
            <img className="product-img" src={randomItem.fortunePhoto} />
            <div className="product-img-title">{randomItem.smallTitle}</div>
            <div className="product-text">{randomItem.comments}</div>
          </div>
        </FortuneResultArea>
      </FortuneResultContainer>
    </div>
  );
};

const FortuneResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FortuneResultArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .fortune-img {
    width: 90px;
    height: 90px;
  }
  & .fortune-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 29px;
    font-size: 18px;
    font-weight: 500;
    & .fortune-title {
      margin-top: 4px;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 53px;
      width: 250px;
      word-break: keep-all;
      text-align: center;
    }
  }
  & .fortune-body {
    width: 100%;
    margin-top: 36px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    & .product-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 16px;
      font-weight: 600;
    }

    & .product-img {
      margin-top: 36px;
      width: 180px;
      height: 180px;
      border-radius: 15px;
    }

    & .product-img-title {
      font-size: 13px;
      font-weight: 600;
      margin: 11px auto;
    }
    & .product-text {
      margin-top: 25px;
      font-size: 13px;
      font-weight: 400;
      white-space: pre-wrap;
    }
  }
`;

export default FortuneResultPage;
