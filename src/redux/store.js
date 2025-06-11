import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const columnSlice = createSlice({
  name: 'columns',
  initialState: initialState.columns,
  reducers: {},
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState.cards,
  reducers: {},
});

const store = configureStore({
  reducer: {
    columns: columnSlice.reducer,
    cards: cardsSlice.reducer,
  },
});
export default store;
