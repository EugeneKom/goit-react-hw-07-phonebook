import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const addContactReducer = contactSlice.reducer;
