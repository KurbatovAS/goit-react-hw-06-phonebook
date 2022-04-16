import { configureStore } from '@reduxjs/toolkit';

import { reduxContactsSlice } from './reduxContacts/slice';
import { reduxFilterSlice } from './reduxFilter/slice';

export const store = configureStore({
  reducer: {
    reduxContacts: reduxContactsSlice.reducer,
    reduxFilter: reduxFilterSlice.reducer,
  },
});
