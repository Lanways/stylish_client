import { configureStore } from '@reduxjs/toolkit';
import idReducer from './idSwitcher';

const store = configureStore({
  reducer: { id: idReducer },
});

export default store;
