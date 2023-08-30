import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getReaderBoard } from "../api/readerBoardController";
import { UserReader } from "../data/type";
import Header from "../Home/components/Header";

const ReaderBoardPage = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const { data, isLoading, isError } = useQuery<UserReader[]>(
    "get-reader-board",
    () => getReaderBoard(),
  );

  if (isError) {
    return <div>에러 발생</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data ? (
    <>
      <Header />
      <LeaderBoardContainer>
        <div className="banner">
          <img
            src="/assets/swiper/swiper3.png"
            style={{ width: "375px", height: "100%" }}
          />
        </div>
        <div className="info">
          {`${year}/${month}/${day} 기준\n순위는 00시에 초기화 됩니다.`}
        </div>
        <div className="content">
          {data.map((user, index) => (
            <div className="personal-content">
              <UserBox key={index}>
                <div className="rank">{`${index + 1}등`}</div>
                <div className="name">{user.nickName}</div>
                <div className="score">{user.score}</div>
              </UserBox>
              <div className="divider" />
            </div>
          ))}
        </div>
      </LeaderBoardContainer>
    </>
  ) : (
    <div>데이터 오류</div>
  );
};

const LeaderBoardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 54px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  & .banner {
    width: 100%;
    height: 358px;
    display: flex;
    justify-content: center;
    margin-top: 40px;

    & .header {
      z-index: 5;
      color: white;
      font-size: 28px;
      font-weight: 600;
      width: 100%;
      white-space: pre-wrap;
      bottom: 30px;
      left: 36.45px;

      & .sub-header {
        margin-top: 10px;
        font-size: 12px;
        color: #c9c9c9;
      }
    }
  }

  & .info {
    padding: 0 24px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #bdbdbd;
    font-size: 12px;
    font-weight: 600;
    white-space: pre-wrap;
    text-align: end;
  }

  & .content {
    margin-top: 50px;
    & .personal-content {
      width: 100%;
      display: flex;
      flex-direction: column;

      & .divider {
        width: 100%;
        height: 1px;
        background-color: rgba(95, 89, 89, 0.54);
      }
    }
  }
`;

const UserBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 30px 28px;
  & .rank {
    width: 70px;
    text-align: start;
  }
  & .name {
    width: 100px;
    text-align: center;
    font-weight: 500;
  }
  & .score {
    width: 70px;
    text-align: end;
  }
`;

export default ReaderBoardPage;
