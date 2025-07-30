import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/sign-in';
import './App.css';
import SignUp from './pages/sign-up';
import HomePage from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
