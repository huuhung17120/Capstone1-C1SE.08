import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user'

 const store = configureStore({
  reducer: {
    userSlider: userSlice.reducer
  },
})

export default store