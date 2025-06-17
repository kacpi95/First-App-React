import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, search }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, search)
  );

export const getAllColumns = (state) => {
  return state.columns;
};
export const getListById = (state) => {
  return state.lists.find((list) => list.id === 1);
};
export const getColumnsByList = (state, listId) => {
  return state.columns.filter((column) => column.listId === listId);
};

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
const listsSlice = createSlice({
  name: 'lists',
  initialState: initialState.lists,
});

export const { addColumn } = columnSlice.actions;
export const { addCard } = cardsSlice.actions;
export const { addSearch } = stringSearch.actions;

const store = configureStore({
  reducer: {
    columns: columnSlice.reducer,
    cards: cardsSlice.reducer,
    search: stringSearch.reducer,
    lists: listsSlice.reducer,
  },
});
export default store;
