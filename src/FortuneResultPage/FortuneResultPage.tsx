import React from 'react';
import styled from 'styled-components';
import Header from '../Home/components/Header';
import { ReactComponent as Carrot } from '../assets/icon/icon_carrot.svg';

const FortuneResultPage = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Header />
      <FortuneResultContainer>
        <FortuneResultArea>
          <Carrot className="fortune-img" />
          <div className="fortune-header">
            09월 29일 오늘의 운세
            <div className="fortune-title">가는 곳마다 사랑받네요</div>
          </div>
          <div className="fortune-body">
            <img
              className="product-img"
              src="https://media.bunjang.co.kr/product/166403645_1_1633647211_w360.jpg"
            />
            <div className="product-tag">#애정운이 높게 유지되는 상품</div>
            <div className="product-text">
              사랑의 기운이 샘솟을 수 있는 날입니다! 오렌지 색상의 원피스를
              입어보세요. 그 어떤 사람보다 당신이 빛나 보일 테니까요.
            </div>
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
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .fortune-img {
    width: 80px;
    height: 80px;
  }
  & .fortune-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 41px;
    font-size: 18px;
    font-weight: 500;
    & .fortune-title {
      font-size: 22px;
      font-weight: 600;
    }
  }
  & .fortune-body {
    width: 100%;
    border-radius: 8px;
    border: 0.3px solid #aeaeae;
    padding: 10px 14px 13px;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .product-img {
      width: 130px;
      height: 130px;
    }

    & .product-tag {
      font-size: 16px;
      font-weight: 600;
      margin: 13px auto;
    }
    & .product-text {
      font-size: 12px;
      font-weight: 500;
      white-space: pre-wrap;
    }
  }
`;

export default FortuneResultPage;
