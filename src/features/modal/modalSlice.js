import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateModal: (state) => {
      state.open = !state.open
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateModal } = modalSlice.actions

export default modalSlice.reducer