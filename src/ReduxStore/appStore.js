import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import userSlice from './userSlice'
import filterSlice from './filterSlice'

const appStore = configureStore({
  reducer: {
    productStore: productSlice,
    userStore: userSlice,
    filterStore: filterSlice,
  },
})

export default appStore
