import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const listsSlice = createSlice({
  name: 'lists',
  initialState: initialState.lists,
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addList } = listsSlice.actions;
export const getListById = (state, listId) => {
  return state.lists.find((list) => list.id === listId);
};

export const getAllLists = (state) => {
  return state.lists;
};

export default listsSlice.reducer;
