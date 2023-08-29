import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import styled from "styled-components";
import RecommendPannel from "./components/RecommendPannel";
import BestPannel from "./components/BestPannel";
import NewPannel from "./components/NewPannel";
import { useQuery } from "react-query";
import { getFortuneItems } from "../api/fortuneController";
import { FortuneProductData } from "../data/type";

const Home: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState("recommend");

  const { data, isLoading, isError } = useQuery<FortuneProductData[]>(
    "get-fortune-items",
    () => getFortuneItems(),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occured while fetching data.</div>;
  }

  if (data) {
    console.log("------Fortune Items------>", data);
  }

  return (
    <>
      <Header />
      <HomeWrapper>
        <Tabs selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
        {selectedTool === "recommend" && <RecommendPannel />}
        {selectedTool === "best" && <BestPannel />}
        {selectedTool === "new" && <NewPannel />}
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 54px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
