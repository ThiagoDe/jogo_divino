import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  image: '',
  compCard: '',
  compImage: ''
}

export const currCardSlice = createSlice({
  name: 'currCard',
  initialState,
  reducers: {
    updateCurrCard: (state, action) => {
      const {name, image, compCard, compImage } = action.payload 
      state.name = name
      state.image = image
      state.compCard = compCard
      state.compImage = compImage
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCurrCard } = currCardSlice.actions

export default currCardSlice.reducer