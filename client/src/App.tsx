import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Candidate from './pages/Candidate';
import About from './pages/About';
import Trend from './pages/Trend';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col h-screen justify-between"> 
          <Navbar />
          <div className="mb-auto">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/candidate" element={<Candidate />} />
              <Route path="/trend" element={<Trend />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter> 
    </>
  );
} 

export default App;
