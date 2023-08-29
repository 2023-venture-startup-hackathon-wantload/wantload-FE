import React from 'react';
// import Puzzle from './components/Puzzle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardgamePage from './CardgamePage/CardgamePage';
import FortuneResultPage from './FortuneResultPage/FortuneResultPage';
import Home from './Home/Home';
import Fortune from './Fortune/Fortune';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fortune" element={<Fortune />} />
          <Route path="/fortune/result" element={<FortuneResultPage />} />
          <Route path="/cardgame" element={<CardgamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
