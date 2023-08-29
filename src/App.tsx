import React from "react";
// import Puzzle from './components/Puzzle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./DetailPage/DetailPage";
import Home from "./Home/Home";
import LeaderBoardPage from "./ReaderBoardPage/ReaderBoardPage";
import LoadingPage from "./LoadingPage/LoadingPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/event" element={<LeaderBoardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
