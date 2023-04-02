import { createSelector } from '@reduxjs/toolkit'

const selectUser = (state) => state.user

export const getUserSkills = createSelector(selectUser, (user) => user.skills)
export const getUserCourses = createSelector(selectUser, (user) => user.courses)
export const getUserPersonalInformation = createSelector(selectUser, (user) => {
  const { email, phoneNumber, gender, ethnicity, pronouns } = user
  return { email, phoneNumber, gender, ethnicity, pronouns }
})
export const getUserIdentity = createSelector(selectUser, (user) => {
  const { firstName, lastName, organization, position } = user
  return { firstName, lastName, organization, position }
})
export const getUserSummary = createSelector(selectUser, (user) => {
  return { summary: user.summary }
})
export const getUserEducation = createSelector(selectUser, (user) => {
  return { education: user.education }
})
export const getUserExperience = createSelector(selectUser, (user) => {
  return { experience: user.experience }
})
export const getUserProjects = createSelector(selectUser, (user) => {
  return { projects: user.projects }
})
export const getUserInterviewerDetails = createSelector(selectUser, (user) => {
  const { type, fields, time } = user
  return {
    interviewerDetails: {
      type,
      fields,
      time,
    },
  }
})
