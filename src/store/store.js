import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../reducers/contactReducer';

export const store = configureStore({
  reducer: {
    counter: contactReducer,
  },
})

export default store;