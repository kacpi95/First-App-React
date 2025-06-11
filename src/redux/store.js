import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const columnSlice = createSlice({
  name: 'columns',
  initialState: initialState.columns,
  reducers: {
    addColumn: (state, action) => {
      state.push(action.payload);
    },
  },
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState.cards,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});
const stringSearch = createSlice({
  name: 'search',
  initialState: initialState.search,
  reducers: {
    addSearch: (state, action) => action.payload,
  },
});
export const { addColumn } = columnSlice.actions;
export const { addCard } = cardsSlice.actions;
export const { addSearch } = stringSearch.actions;

const store = configureStore({
  reducer: {
    columns: columnSlice.reducer,
    cards: cardsSlice.reducer,
    search: stringSearch.reducer,
  },
});
export default store;
