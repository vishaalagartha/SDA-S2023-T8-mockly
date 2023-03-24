import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const interviewSlice = createSlice({
  name: 'interviews',
  initialState,
  reducers: {
    setInterviews: (_, action) => ([ ...action.payload ]),
    addInterview: (state, action) => ([ ...state, action.payload ]),
    deleteInterview: (state, action) => state.filter((interview) => interview._id !== action.payload._id)
  }
})

export const interviewsSelector = state => state.interviews

export const { setInterviews, addInterview, deleteInterview } = interviewSlice.actions

export default interviewSlice.reducer
