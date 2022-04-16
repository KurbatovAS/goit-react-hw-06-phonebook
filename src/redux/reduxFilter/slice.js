import { createSlice } from '@reduxjs/toolkit';

export const reduxFilterSlice = createSlice({
  name: 'reduxFilter',
  initialState: '',
  reducers: {
    set(state, action) {
      return (state = action.payload);
    },
  },
});

export const { set } = reduxFilterSlice.actions;
