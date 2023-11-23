import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SessionData {}
// Tạo một slice để lưu session
interface SessionState {
  session: null | SessionData // SessionData là kiểu dữ liệu của session, bạn cần định nghĩa nó
}

const initialState: SessionState = {
  session: null
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionData | null>) => {
      state.session = action.payload
    },
    clearSession: (state) => {
      state.session = null
    }
  }
})

export const { setSession, clearSession } = sessionSlice.actions
export default sessionSlice.reducer
