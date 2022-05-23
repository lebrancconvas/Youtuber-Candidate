import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

import Candidate from './pages/Candidate';

import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
} 

export default App;
