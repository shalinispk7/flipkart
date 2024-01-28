import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    rating: [],
  },
  reducers: {
    setRating: (state, action) => {
      const prev = state.rating || [] // Access previous state value
      state.rating = [...prev, parseInt(action.payload)]
    },
    removeRating: (state, action) => {
      state.rating = state.rating.filter((e) => e != action.payload)
    },
  },
})

export const { setRating, removeRating } = filterSlice.actions
export default filterSlice.reducer
