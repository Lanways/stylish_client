// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/mainPage/MainPage';
import ItemDetailPage from './pages/itemDetailPage/ItemDetailPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
//import components
import HeaderDestop from './components/headerDestop/HeaderDestop';
//context
import { AuthProvider } from './contexts/AuthContext';
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
            <AuthProvider>
              <Routes>
                {/* <Route path='*' element={<HomePage />} /> */}
                <Route path='*' element={<MainPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='/product-detail' element={<ItemDetailPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
