import request from '../utils/request'

export const updatePersonalIdentityAPI = async (payload) =>
  request('users/personal-identity', {
    method: 'PUT',
    body: JSON.stringify(payload),
  })

export const fetchUserAPI = async () =>
  request('users', {
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
