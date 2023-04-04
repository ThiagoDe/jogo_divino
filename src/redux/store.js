import { configureStore } from '@reduxjs/toolkit'
import currCardReducer from '../features/currCard/currCardSlice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    currCard: currCardReducer,
    modal: modalReducer,
  },
})