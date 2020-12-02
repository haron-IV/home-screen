import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddNewModalVisible: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isAddNewModalVisible = !state.isAddNewModalVisible
    }
  }
});

export const { toggleModal } = appSlice.actions;

export const selectIsAddNewModalVisible = state => state.app.isAddNewModalVisible;

export default appSlice.reducer;
