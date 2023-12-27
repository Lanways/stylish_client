// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import MainPage from './pages/mainPage/MainPage';
// styling
import './reset.scss';
import './base.scss';

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
