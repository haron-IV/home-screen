import { configureStore } from '@reduxjs/toolkit';
import linksReducer from './links'
import appStoreReducer from "./appStore"
import addLinkModal from './addLinkModal'
import menuReducer from './menu'
import bookmarkReducer from './bookmarks'
import statsReducer from './stats'

export default configureStore({
  reducer: {
    links: linksReducer,
    app: appStoreReducer,
    addLinkModal: addLinkModal,
    menu: menuReducer,
    bookmark: bookmarkReducer,
    stats: statsReducer
  },
});