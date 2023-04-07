import { configureStore } from '@reduxjs/toolkit'
import currCardReducer from '../features/currCard/currCardSlice'
import modalReducer from '../features/modal/modalSlice'
import gameReducer from '../features/game/gameSlice'
import cardSizeReducer from '../features/cardSize/cardSizeSlice'

export const store = configureStore({
  reducer: {
    currCard: currCardReducer,
    modal: modalReducer,
    game: gameReducer,
    cardSize: cardSizeReducer
  },
})