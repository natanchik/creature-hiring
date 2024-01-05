import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  category: 'All',
  sortBy: 'rating',
  order: 'asc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // nextPage: (state) => {
    //   state.page = state.page === 4 ? state.page : state.page + 1;
    // },
    // prevPage: (state) => {
    //   state.page = state.page === 1 ? 1 : state.page - 1;
    // },
    setPage: (state, action) => {
      state.page = action.payload;
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

export const { setPage, setCategory, setSortBy, setOrder } = filterSlice.actions;

export default filterSlice.reducer;
