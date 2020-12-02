import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalVisible: false,
  name: ''
}

export const addLinkModalSlice = createSlice({
  name: 'addLinkModal',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isModalVisible = !state.isModalVisible
    },
    setName: (state, action) => {
      state.name = action.payload
    }
  }
});

export const { toggleModal, setName } = addLinkModalSlice.actions

export const selectIsModalVisible = state => state.addLinkModal.isModalVisible
export const selectName = state => state.addLinkModal.name

export default addLinkModalSlice.reducer;
