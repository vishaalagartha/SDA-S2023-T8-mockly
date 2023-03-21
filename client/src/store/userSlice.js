import { createSlice } from '@reduxjs/toolkit'
import { concat, reject, remove } from 'lodash'

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  organization: '',
  position: '',
  email: '',
  phoneNumber: '',
  pronouns: '',
  gender: '',
  ethnicity: '',
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
    setIdentity: (state, action) => {
      const { firstName, lastName, organization, position } = action.payload
      return {
        ...state,
        firstName,
        lastName,
        organization,
        position,
      }
    },
    setSummary: (state, action) => {
      return {
        ...state,
        summary: action.payload.summary,
      }
    },
    setPersonalInformation: (state, action) => {
      const { email, phoneNumber, gender, ethnicity, pronouns } = action.payload
      return {
        ...state,
        email,
        phoneNumber,
        gender,
        ethnicity,
        pronouns,
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
      remove(state.education, action.payload)
    },
    addExperience: (state, action) => {
      state.experience = concat(state.experience, action.payload)
    },
    removeExperience: (state, action) => {
      remove(state.experience, action.payload)
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
  setIdentity,
  setSummary,
  setPersonalInformation,
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
