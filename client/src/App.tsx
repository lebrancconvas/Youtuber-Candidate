import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

import Candidate from './pages/Candidate';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/candidate" element={<Candidate />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
