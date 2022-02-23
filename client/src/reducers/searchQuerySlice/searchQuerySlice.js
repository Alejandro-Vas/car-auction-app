import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      return action.payload;
    },
  },
});

export default searchQuerySlice;
export const searchQueryActions = searchQuerySlice.actions;
