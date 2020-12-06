import { createSlice } from '@reduxjs/toolkit';
import { addBookmarkLink } from "../utils"

const initialState = {
  bookmark: []
}

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmark.push(action.payload)
      addBookmarkLink(action.payload)
    },
    setBookmark: (state, action) => {
      state.bookmark = action.payload
    }
  }
});

export const { addBookmark, setBookmark } = bookmarkSlice.actions;

export const selectBookmark = state => state.bookmark.bookmark;

export default bookmarkSlice.reducer;
