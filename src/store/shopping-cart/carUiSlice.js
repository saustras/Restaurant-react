import { createSlice } from '@reduxjs/toolkit';

const cartUiSlice = createSlice({
  name: 'cartUi',
  initialState: {
    isCartOpen: false,
  },
  reducers: {
    toggle(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;
