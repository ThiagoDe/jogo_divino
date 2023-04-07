import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 122,
  height: 174,
}

export const cardSizeSlice = createSlice({
  name: 'cardSize',
  initialState,
  reducers: {
    updateCardSize: (state, action) => {
      const { width, height } = action.payload 
      state.width = width
      state.height = height
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCardSize } = cardSizeSlice.actions

export default cardSizeSlice.reducer