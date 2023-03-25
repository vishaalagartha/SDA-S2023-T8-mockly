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
