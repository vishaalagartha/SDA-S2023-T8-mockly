import { Router } from 'express'
import { generate } from '../utils/token'

export default Router()
  /**
   * Login
   */
  .post('/', async (request, response) => {
    const { username, password } = request.body
    if (username === 'vishaal' && password === 'password') {
      const token = generate('id')
      response.json({ token })
    }
  })