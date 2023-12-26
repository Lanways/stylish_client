import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={basename}>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
