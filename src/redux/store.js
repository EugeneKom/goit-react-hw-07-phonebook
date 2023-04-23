import { configureStore } from '@reduxjs/toolkit';
import { addContactReducer } from './contactSlice';
import { filtersReducer } from './filterContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: addContactReducer,
    filters: filtersReducer,
  },
});
