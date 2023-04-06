import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gameOn: false,
  usingBoard: true,
  subject: '',
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGame: (state) => {
      state.gameOn = !state.gameOn
    },
    updateUsingBoard: (state) => {
      state.usingBoard = !state.usingBoard
    },
    updateSubject: (state, actions) => {
      state.subject = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateGame, updateSubject, updateUsingBoard} = gameSlice.actions

export default gameSlice.reducer