import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App