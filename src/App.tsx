// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
//import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/mainPage/MainPage';
import ItemDetailPage from './pages/itemDetailPage/ItemDetailPage';
import CartCheckoutPage from './pages/cartCheckoutPage/CartCheckoutPage';
import InfoCheckoutPage from './pages/infoCheckoutPage/InfoCheckoutPage';
import OrderCompletePage from './pages/orderCompletePage/OrderCompletePage';
import OrderCheckoutPage from './pages/orderCheckoutPage/orderCheckoutPage';
//context
import { AuthProvider } from './contexts/AuthContext';
import { IdProvider } from './contexts/IdContext';
import { PriceProvider } from './contexts/PriceContext';
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
              <IdProvider>
                <PriceProvider>
                  <Routes>
                    {/* <Route path='*' element={<HomePage />} /> */}
                    <Route path='*' element={<MainPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route
                      path='/product-detail'
                      element={<ItemDetailPage />}
                    />
                    <Route
                      path='/cart-checkout'
                      element={<CartCheckoutPage />}
                    />
                    <Route
                      path='/info-checkout'
                      element={<InfoCheckoutPage />}
                    />
                    <Route
                      path='/order-complete'
                      element={<OrderCompletePage />}
                    />
                    <Route path='/order-form'
                      element={<OrderCheckoutPage />}
                    />
                  </Routes>
                </PriceProvider>
              </IdProvider>
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
