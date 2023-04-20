import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterContactsSlice = createSlice({
  name: 'filterContacts',
  initialState: filterInitialState,
  reducers: {
    setFilters(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilters } = filterContactsSlice.actions;
export const filtersReducer = filterContactsSlice.reducer;
