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
export const getListById = (state, listId) => {
  return state.lists.find((list) => list.id === listId);
};
export const getColumnsByList = (state, listId) => {
  return state.columns.filter((column) => column.listId === listId);
};
export const getAllLists = (state) => {
  return state.lists;
};
export const getFavoriteCards = (state) => {
  return state.cards.filter((card) => card.isFavorite);
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
    toggleFavorite: (state, action) => {
      const card = state.find((card) => card.id === action.payload);
      if (card) {
        card.isFavorite = !card.isFavorite;
      }
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
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addColumn } = columnSlice.actions;
export const { addCard } = cardsSlice.actions;
export const { addSearch } = stringSearch.actions;
export const { addList } = listsSlice.actions;
export const { toggleFavorite } = cardsSlice.actions;

const store = configureStore({
  reducer: {
    columns: columnSlice.reducer,
    cards: cardsSlice.reducer,
    search: stringSearch.reducer,
    lists: listsSlice.reducer,
  },
});
export default store;
