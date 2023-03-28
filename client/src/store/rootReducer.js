import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import interviews from './interviewsSlice'
import feedbackHistory from './feedbackHistorySlice'


const rootReducer = combineReducers({
  user,
  interviews,
  feedbackHistory
})

export const store = configureStore({
  reducer: rootReducer
})
