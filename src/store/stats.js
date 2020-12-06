import { createSlice } from '@reduxjs/toolkit';
import { increaseOpenedLinks, getStats } from '../utils'

export const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    linksOpened: 0
  },
  reducers: {
    incrementOpenedLinks (state) {
      state.linksOpened = state.linksOpened+1
      increaseOpenedLinks()
    },
    setLinksOpened (state) {
      state.linksOpened = getStats().linksOpened
    }
  }
});

export const { incrementOpenedLinks, setLinksOpened } = statsSlice.actions;

export const selectOpenedLinks = state => state.stats.linksOpened

export default statsSlice.reducer;
