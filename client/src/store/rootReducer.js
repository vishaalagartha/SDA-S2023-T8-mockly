import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import interviews from './interviewsSlice'
import feedbackHistory from './feedbackHistorySlice'
import feedback from './feedbackSlice'

const rootReducer = combineReducers({
  user,
  interviews,
  feedbackHistory,
  feedback
})

export const store = configureStore({
  reducer: rootReducer
})
