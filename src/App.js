import React from 'react';
import ProblemOne from './Components/ProblemOne';
import ProblemTwo from './Components/ProblemTwo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/problemone" element={<ProblemOne/>} />
        <Route path="/problemtwo" element={<ProblemTwo/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

