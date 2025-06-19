import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const stringSearch = createSlice({
  name: 'search',
  initialState: initialState.search,
  reducers: {
    addSearch: (state, action) => action.payload,
  },
});

export const { addSearch } = stringSearch.actions;

export default stringSearch.reducer;
