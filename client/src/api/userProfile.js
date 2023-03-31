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

export const addSkillAPI = async (payload) =>
  request('users/skills', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

export const deleteSkillAPI = async (payload) =>
  request('users/skills', {
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
