import { createSlice } from "@reduxjs/toolkit";
import { increaseOpenedLinks, increaseSearchCount, getStats } from "../utils";

export const statsSlice = createSlice({
  name: "stats",
  initialState: {
    linksOpened: 0,
    searchCount: 0,
  },
  reducers: {
    incrementOpenedLinks(state) {
      state.linksOpened = state.linksOpened + 1;
      increaseOpenedLinks();
    },
    setLinksOpened(state) {
      state.linksOpened = getStats().linksOpened;
    },
    incrementSearchCount(state) {
      state.searchCount = state.searchCount + 1;
      increaseSearchCount();
    },
    setSearchCount(state) {
      state.searchCount = getStats().searchCount;
    },
  },
});

export const { incrementOpenedLinks, setLinksOpened, incrementSearchCount, setSearchCount } = statsSlice.actions;

export const selectOpenedLinks = (state) => state.stats.linksOpened;
export const selectSearchCount = (state) => state.stats.searchCount;

export default statsSlice.reducer;
