import { createSlice } from '@reduxjs/toolkit';
import { addBookmarkLink, setBookmarkLinks } from "../utils"

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
    },
    removeBookmarkLink: (state, action) => {
      state.bookmark = state.bookmark.filter(link => link.id !== action.payload)
      setBookmarkLinks(state.bookmark)
    }
  }
});

export const { addBookmark, setBookmark, removeBookmarkLink} = bookmarkSlice.actions;

export const selectBookmark = state => state.bookmark.bookmark;

export default bookmarkSlice.reducer;
