import React from 'react';
// import Puzzle from './components/Puzzle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Fortune from './Fortune/Fortune';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fortune" element={<Fortune />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
