import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  edit: false,
  changePosition: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleEdit: state => {
      if (state.changePosition) {
        state.changePosition = false
      }
      state.edit = !state.edit
    },
    toggleChangingPosition: state => {
      if (state.edit) {
        state.edit = false
      }
      state.changePosition = !state.changePosition
    }
  }
});

export const { toggleEdit, toggleChangingPosition } = menuSlice.actions

export const selectEdit = state => state.menu.edit
export const selectChangePosition = state => state.menu.changePosition

export default menuSlice.reducer;
