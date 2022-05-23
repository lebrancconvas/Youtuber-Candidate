import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Candidate from './pages/Candidate';
import About from './pages/About';
import Trend from './pages/Trend';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
} 

export default App;
