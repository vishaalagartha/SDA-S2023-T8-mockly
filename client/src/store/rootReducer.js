import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import interviews from './interviewsSlice'


const rootReducer = combineReducers({
  user,
  interviews
})

export const store = configureStore({
  reducer: rootReducer
})
