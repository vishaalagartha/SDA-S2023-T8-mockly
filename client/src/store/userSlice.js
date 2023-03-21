import { createSlice } from '@reduxjs/toolkit'
import { concat, reject } from 'lodash'

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  summary: '',
  skills: [],
  education: [],
  experience: [],
  projects: [],
  courses: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSummary: (state, action) => {
      return {
        ...state,
        summary: action.payload,
      }
    },
    addSkill: (state, action) => {
      state.skills = concat(state.skills, action.payload)
    },
    removeSkill: (state, action) => {
      state.skills = reject(state.skills, { id: action.payload.id })
    },
    addEducation: (state, action) => {
      state.education = concat(state.education, action.payload)
    },
    removeEducation: (state, action) => {
      state.education = reject(state.education, { id: action.payload.id })
    },
    addExperience: (state, action) => {
      state.experience = concat(state.experience, action.payload)
    },
    removeExperience: (state, action) => {
      state.experience = reject(state.experience, { id: action.payload.id })
    },
    addProject: (state, action) => {
      state.projects = concat(state.projects, action.payload)
    },
    removeProject: (state, action) => {
      state.projects = reject(state.projects, { id: action.payload.id })
    },
    addCourse: (state, action) => {
      state.courses = concat(state.courses, action.payload)
    },
    removeCourse: (state, action) => {
      state.courses = reject(state.courses, { id: action.payload.id })
    },
  },
})

export const {
  setSummary,
  addSkill,
  removeSkill,
  addEducation,
  removeEducation,
  addExperience,
  removeExperience,
  addProject,
  removeProject,
  addCourse,
  removeCourse,
} = userSlice.actions

export default userSlice.reducer
