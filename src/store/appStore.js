import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deviceWidth: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDeviceWidth: (state, action) => {
      state.deviceWidth = action.payload
    }
  }
});

export const { setDeviceWidth } = appSlice.actions;

export const selectDeviceWidth = state => state.app.deviceWidth;

export default appSlice.reducer;
