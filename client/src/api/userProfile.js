import request from '../utils/request'

export const updatePersonalIdentityAPI = async (payload) =>
  request('users/personal-identity', {
    method: 'PUT',
    body: JSON.stringify(payload),
  })

// fetch a user's profile by id (GET /api/users/:userId)
export const fetchUserAPI = async (userId) =>
  request(`users/${userId}?fields=password`, {
    method: 'GET',
  })

export const updatePersonalInformationAPI = async (payload) =>
  request('users/personal-information', {
    method: 'PUT',
    body: JSON.stringify(payload),
  })

// add a new skill to a particular user (POST /api/users/:userId/skills)
export const addSkillAPI = async (userId, payload) =>
  request(`users/${userId}/skills`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

// delete a skill of a particular user (DELETE /api/users/:userId/skills)
export const deleteSkillAPI = async (userId, payload) =>
  request(`users/${userId}/skills`, {
    method: 'DELETE',
    body: JSON.stringify(payload),
  })

export const addCourseAPI = async (payload) =>
  request('users/courses', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const deleteCourseAPI = async (payload) =>
  request('users/courses', {
    method: 'DELETE',
    body: JSON.stringify(payload),
  })

export const updateSummaryAPI = async (payload) =>
  request('users/summary', {
    method: 'PUT',
    body: JSON.stringify(payload),
  })

export const updateInterviewerDetailsAPI = async (userId, payload) =>
  request(`users/${userId}/interviewer-details`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
