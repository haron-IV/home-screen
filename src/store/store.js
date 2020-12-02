import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import linksReducer from './links'
import appStoreReducer from "./appStore"
import addLinkModal from './addLinkModal'

export default configureStore({
  reducer: {
    counter: counterReducer,
    links: linksReducer,
    app: appStoreReducer,
    addLinkModal: addLinkModal
  },
});