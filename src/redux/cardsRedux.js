import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

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

export const { toggleFavorite, addCard } = cardsSlice.actions;

export const getFavoriteCards = (state) => {
  return state.cards.filter((card) => card.isFavorite);
};

export default cardsSlice.reducer;
