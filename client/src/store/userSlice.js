import { createSlice } from '@reduxjs/toolkit'
import { concat, reject, remove } from 'lodash'

const initialState = {
  _id: '',
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
  // interviewer details
  type: '',
  fields: [],
  time: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    resetUser: () => {
      return { ...initialState }
    },
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
      state.skills = reject(state.skills, { _id: action.payload.skillId })
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
      remove(state.projects, action.payload)
    },
    addCourse: (state, action) => {
      state.courses = concat(state.courses, action.payload)
    },
    removeCourse: (state, action) => {
      state.courses = reject(state.courses, { _id: action.payload.courseId })
    },
    setInterviewerDetails: (state, action) => {
      return { ...state, ...action.payload }
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
  setUser,
  setInterviewerDetails,
  resetUser,
} = userSlice.actions
export const userSelector = (state) => state.user
export default userSlice.reducer
