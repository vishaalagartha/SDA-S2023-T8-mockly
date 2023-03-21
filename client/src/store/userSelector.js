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
