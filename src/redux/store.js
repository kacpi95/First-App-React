import { configureStore } from '@reduxjs/toolkit';
import { strContains } from '../utils/strContains';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import listsReducer from './listsRedux';
import searchReducer from './searchRedux';

export const getFilteredCards = ({ cards, search }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, search)
  );

const store = configureStore({
  reducer: {
    columns: columnsReducer,
    cards: cardsReducer,
    search: searchReducer,
    lists: listsReducer,
  },
});
export default store;
