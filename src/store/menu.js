import { createSlice } from "@reduxjs/toolkit";
import { getStorage, setStograge } from "../utils";

const storage = JSON.parse(getStorage());

const initialState = {
  edit: false,
  changePosition: false,
  dataImporting: false,
  newTabOpening: storage?.config ? storage.config.newTabOpening : false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleEdit: (state) => {
      if (state.changePosition) {
        state.changePosition = false;
      }
      state.edit = !state.edit;
    },
    toggleChangingPosition: (state) => {
      if (state.edit) {
        state.edit = false;
      }
      state.changePosition = !state.changePosition;
    },
    toggleDataImporting: (state) => {
      state.dataImporting = !state.dataImporting;
    },
    toggleNewTabOpening: (state) => {
      state.newTabOpening = !state.newTabOpening;
      const storage = JSON.parse(getStorage());
      storage.config.newTabOpening = state.newTabOpening;
      setStograge(storage);
    },
  },
});

export const { toggleEdit, toggleChangingPosition, toggleDataImporting, toggleNewTabOpening } = menuSlice.actions;

export const selectEdit = (state) => state.menu.edit;
export const selectChangePosition = (state) => state.menu.changePosition;
export const selectDataImporting = (state) => state.menu.dataImporting;
export const selectNewTabOpening = (state) => state.menu.newTabOpening;

export default menuSlice.reducer;
