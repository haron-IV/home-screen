import sortBy from 'lodash.sortby'
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
      state.value = state.value.map( (link, i) => {
        link.index = i
        return link
      })
      setStorageLinks(state.value)
    },
    editLink: (state, action) => {
      const { id } = action.payload
      const idnexOfEditingLink = state.value.findIndex(link => link.id === id)
      state.value[idnexOfEditingLink] = action.payload
      setStorageLinks(state.value)
    },
    toggleFavourites: (state, action) => {
      const id  = action.payload
      
      state.value = state.value.map(link => {
        if(link.id === id && Boolean(link.favourite) === false) {
          link.favourite = true
        } else if (link.id === id && Boolean(link.favourite) === true) {
          link.favourite = false
        }
        return link
      })
  
      setStorageLinks(state.value)
    },
    updateLinkPosition: (state, action) => {
      state.value[action.payload.movedElementIndex].index = Number(action.payload.droppedAtIndex) - 1
      state.value = sortBy(state.value, 'index')
      state.value.map((link, i) => link.index = i)
      setStorageLinks(state.value)
    }
  }
});

export const { addLink, setLinks, removeById, editLink, updateLinkPosition, toggleFavourites } = linksSlice.actions;

export const selectLinks = state => state.links.value;
export const getLinksCount = state => state.links.value.length

export default linksSlice.reducer;
