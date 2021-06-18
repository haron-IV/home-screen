import { createSlice } from "@reduxjs/toolkit";
import { increaseOpenedLinks, increaseSearchCount, getStats, increaseTranslatedPhrases } from "../utils";

export const statsSlice = createSlice({
  name: "stats",
  initialState: {
    linksOpened: 0,
    searchCount: 0,
    translatedPhrases: 0,
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
    incrementTranslatedPhrases(state) {
      state.translatedPhrases = state.translatedPhrases + 1;
      increaseTranslatedPhrases();
    },
    setTranslatedPhrases(state) {
      state.translatedPhrases = getStats().translatedPhrases;
    },
  },
});

export const { incrementOpenedLinks, setLinksOpened, incrementSearchCount, setSearchCount, incrementTranslatedPhrases, setTranslatedPhrases } =
  statsSlice.actions;

export const selectOpenedLinks = (state) => state.stats.linksOpened;
export const selectSearchCount = (state) => state.stats.searchCount;
export const selectTranslatedPhrases = (state) => state.stats.translatedPhrases;

export default statsSlice.reducer;
