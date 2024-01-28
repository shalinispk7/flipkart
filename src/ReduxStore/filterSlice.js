import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    rating: [],
    discount: [],
    sortBy: '',
  },
  reducers: {
    setRating: (state, action) => {
      const prev = state.rating || [] // Access previous state value
      state.rating = [...prev, parseInt(action.payload)]
    },
    removeRating: (state, action) => {
      state.rating = state.rating.filter((e) => e != action.payload)
    },
    setDiscount: (state, action) => {
      const prev = state.rating || [] // Access previous state value
      state.discount = [...prev, parseInt(action.payload)]
    },
    removeDiscount: (state, action) => {
      state.discount = state.discount.filter((e) => e != action.payload)
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export const {
  setRating,
  removeRating,
  setDiscount,
  removeDiscount,
  setSortBy,
} = filterSlice.actions
export default filterSlice.reducer
