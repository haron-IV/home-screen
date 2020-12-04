import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalVisible: false,
  type: '',
  editingElementId: null
}

export const addLinkModalSlice = createSlice({
  name: 'addLinkModal',
  initialState,
  reducers: {
    toggleModal: state => {
      state.type = 'new'
      state.isModalVisible = !state.isModalVisible
    },
    toggleEditingModal: (state, action) => {
      state.type = 'edit'
      state.isModalVisible = !state.isModalVisible
      state.editingElementId = action.payload
    }
  }
});

export const { toggleModal, toggleEditingModal } = addLinkModalSlice.actions

export const selectIsModalVisible = state => state.addLinkModal.isModalVisible
export const selectModalType = state => state.addLinkModal.type
export const selectEditingElementId = state => state.addLinkModal.editingElementId

export default addLinkModalSlice.reducer;
