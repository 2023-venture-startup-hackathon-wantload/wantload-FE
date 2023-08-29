import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import styled from "styled-components";
import RecommendPannel from "./components/RecommendPannel";
import BestPannel from "./components/BestPannel";
import NewPannel from "./components/NewPannel";

const Home: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState("recommend");

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
  width: 100%;
  height: 100%;
  padding-top: 54px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
