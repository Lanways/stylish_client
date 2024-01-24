//IMPORTANT hooks from redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialSeletedOption = { id: '' };

const idSwitcherSlice = createSlice({
  name: 'idSwitcher',
  initialState: initialSeletedOption,
  reducers: {
    idChanger(state, actions) {
      state.id = actions.payload;
    },
  },
});

export const idActions = idSwitcherSlice.actions;

export default idSwitcherSlice.reducer;
