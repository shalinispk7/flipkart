import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: '',
    currentPath: '/',
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload
    },
  },
})

export const { setUserInfo, setCurrentPath } = userSlice.actions
export default userSlice.reducer
