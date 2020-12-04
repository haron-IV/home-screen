import { createSlice } from '@reduxjs/toolkit';
import { addNewLink, setStorageLinks } from '../utils'

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
    },
    removeById: (state, action) => {
      const id = action.payload
      state.value = state.value.filter(link => link.id !== id)
      setStorageLinks(state.value)
    },
    editLink: (state, action) => {
      const { id } = action.payload
      const idnexOfEditingLink = state.value.findIndex(link => link.id === id)
      state.value[idnexOfEditingLink] = action.payload
      setStorageLinks(state.value)
    }
  }
});

export const { addLink, setLinks, removeById, editLink } = linksSlice.actions;

export const selectLinks = state => state.links.value;

export default linksSlice.reducer;
