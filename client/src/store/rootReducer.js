import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import interviews from './interviewsSlice'
import schedule from './scheduleSlice'

const rootReducer = combineReducers({
  user,
  interviews,
  schedule
})

export const store = configureStore({
  reducer: rootReducer
})
