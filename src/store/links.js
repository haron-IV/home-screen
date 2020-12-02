import { createSlice } from '@reduxjs/toolkit';
import { addNewLink } from '../utils'

export const linksSlice = createSlice({
  name: 'links',
  initialState: {
    value: [],
  },
  reducers: {
    addLink: (state, action) => {
      state.value.push(action.payload)
      addNewLink(action.payload)
    },
    setLinks: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { addLink, setLinks } = linksSlice.actions;

export const selectLinks = state => state.links.value;

export default linksSlice.reducer;
