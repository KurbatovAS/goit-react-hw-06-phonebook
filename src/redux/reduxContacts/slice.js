import { createSlice } from '@reduxjs/toolkit';

export const reduxContactsSlice = createSlice({
  name: 'reduxContacts',
  initialState: [],
  reducers: {
    add(state, action) {
      return [...state, ...action.payload];
    },
    remove(state, action) {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const { add, remove } = reduxContactsSlice.actions;
