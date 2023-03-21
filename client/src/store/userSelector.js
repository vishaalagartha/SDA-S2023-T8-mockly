import { createSelector } from '@reduxjs/toolkit'

const selectUser = (state) => state.user

export const selectSkills = createSelector(selectUser, (user) => user.skills)
export const selectCourses = createSelector(selectUser, (user) => user.courses)
