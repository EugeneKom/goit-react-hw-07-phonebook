import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from 'api/apiContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDataContact = createAsyncThunk(
  'contacts/addContact',
  async (dataContact, { rejectWithValue }) => {
    try {
      return await createContact(dataContact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await removeContact(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
