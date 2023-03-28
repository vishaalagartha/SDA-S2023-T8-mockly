import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const feedbackHistorySlice = createSlice({
  name: 'feedbackHistory',
  initialState,
  reducers: {
    setFeedbackHistory: (_, action) => ([ ...action.payload ]),
    addFeedbackHistory: (state, action) => ([ ...state, action.payload ]),
  },
})

export const {
  setFeedbackHistory,
  addFeedbackHistory
} = feedbackHistorySlice.actions
export const feedbackHistorySelector = (state) => state.feedbackHistory
export default feedbackHistorySlice.reducer
