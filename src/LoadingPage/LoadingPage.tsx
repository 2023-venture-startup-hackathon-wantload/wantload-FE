import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getFirstWaitingPosition } from "../api/waitingRoomController";
import CardgamePage from "../CardgamePage/CardgamePage";
import { WaitingPosition } from "../data/type";
import Fortune from "../Fortune/Fortune";

const LoadingPage = () => {
  const location = useLocation();
  const itemId = location.state.itemId;
  const fortune = location.state.fortuneItems;
  console.log("item id : ", itemId);
  const { data, isLoading, isError } = useQuery<WaitingPosition>(
    "get-waiting-position",
    () => getFirstWaitingPosition(),
  );

  if (isError) {
    return <div>에러 발생</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }
  return data !== undefined ? (
    data.userNum > 100 ? (
      <CardgamePage
        itemId={itemId}
        initPos={data.userNum}
        fortuneItems={fortune}
      />
    ) : (
      <Fortune itemId={itemId} initPos={data.userNum} fortuneItems={fortune} />
    )
  ) : (
    <div>데이터 오류</div>
  );
};

export default LoadingPage;
