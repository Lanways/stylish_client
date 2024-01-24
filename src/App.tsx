// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
import HomePage from './pages/homePage/HomePage';
import MainPage from './pages/mainPage/MainPage';
import ItemDetailPage from './pages/itemDetailPage/ItemDetailPage';
// styling
import './reset.scss';
import './base.scss';

const basename = process.env.PUBLIC_URL;
const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path='*' element={<HomePage />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/product-detail' element={<ItemDetailPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
