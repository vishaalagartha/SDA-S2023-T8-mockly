import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'


const rootReducer = combineReducers({
  user
})

export const store = configureStore({
  reducer: rootReducer
})
