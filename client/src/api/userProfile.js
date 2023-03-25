import request from '../utils/request'

export const updatePersonalIdentityAPI = async (payload) => {
  try {
    const response = await request('users/personal-identity', {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchUserAPI = async () => {
  try {
    const response = await request('users', {
      method: 'GET',
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updatePersonalInformationAPI = async (payload) => {
  try {
    const response = await request('users/personal-information', {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

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