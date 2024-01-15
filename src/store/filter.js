//IMPORTANT hooks from redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialSeletedOption = { limit: '20', order: 'newest' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialSeletedOption,
  reducers: {
    switchLimit(state, action) {
      state.limit = action.payload;
    },

    switchOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
