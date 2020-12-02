import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  edit: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleEdit: state => {
      state.edit = !state.edit
    }
  }
});

export const { toggleEdit } = menuSlice.actions

export const selectEdit = state => state.menu.edit

export default menuSlice.reducer;
