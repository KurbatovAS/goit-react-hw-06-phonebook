import { createSlice } from '@reduxjs/toolkit';
import { getContactsFromLS } from '../../helpers/LocalStorage/LocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function setInitialState() {
  if (getContactsFromLS('contacts')) {
    return getContactsFromLS('contacts');
  } else {
    return initialContacts;
  }
}

export const reduxContactsSlice = createSlice({
  name: 'reduxContacts',
  initialState: setInitialState(),
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
