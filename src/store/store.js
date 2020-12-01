import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import linksReducer from './links'

export default configureStore({
  reducer: {
    counter: counterReducer,
    links: linksReducer
  },
});