import { createSlice } from '@reduxjs/toolkit';
import { addDataContact, deleteContact, fetchContacts } from './contactThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.push(payload);
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledDelete = (state, { payload }) => {
  const index = state.contacts.findIndex(contact => {
    return contact.id === payload.id;
  });
  state.contacts.splice(index, 1);
  state.isLoading = false;
  state.error = null;
};

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addDataContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isRejectedAction, handleRejected)
      .addMatcher(isPendingAction, handlePending);
  },
});

export const addContactReducer = contactSlice.reducer;
