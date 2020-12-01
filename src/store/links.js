import { createSlice } from '@reduxjs/toolkit';

export const linksSlice = createSlice({
  name: 'links',
  initialState: {
    value: [],
  },
  reducers: {
    addLink: (state, action) => {
      state.value.push(action.payload)
    }
  }
});

export const { addLink } = linksSlice.actions;

export const selectLinks = state => state.links.value;

export default linksSlice.reducer;
