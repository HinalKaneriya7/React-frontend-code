import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StarWar from './pages/starwar.js';
// import People from './pages/people';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StarWar />} />
        {/* <Route path="people" element={<People />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;


