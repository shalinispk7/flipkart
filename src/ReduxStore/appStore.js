import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'

const appStore = configureStore({
  reducer: {
    productStore: productSlice,
  },
})

export default appStore
