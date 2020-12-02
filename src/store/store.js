import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import linksReducer from './links'
import appStoreReducer from "./appStore"

export default configureStore({
  reducer: {
    counter: counterReducer,
    links: linksReducer,
    app: appStoreReducer
  },
});