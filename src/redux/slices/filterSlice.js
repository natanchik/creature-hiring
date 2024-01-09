import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  maxPage: 1,
  perPage: 4,
  category: 'All',
  sortBy: 'rating',
  order: 'asc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setMaxPage: (state, action) => {
      state.maxPage = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setPage, setMaxPage, setCategory, setSortBy, setOrder } = filterSlice.actions;

export default filterSlice.reducer;
