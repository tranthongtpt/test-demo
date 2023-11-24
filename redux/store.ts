import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from './features/sessionSlice'

// Tạo store Redux Toolkit
const store = configureStore({
  reducer: {
    session: sessionSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
