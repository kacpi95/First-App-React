import { createSlice } from '@reduxjs/toolkit';
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
export const { addColumn } = columnSlice.actions;
export const getColumnsByList = (state, listId) => {
  return state.columns.filter((column) => column.listId === listId);
};
export const getAllColumns = (state) => {
  return state.columns;
};
export default columnSlice.reducer;
