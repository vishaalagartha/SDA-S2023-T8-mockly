import { Router } from 'express'
import fetch from 'node-fetch'
import { generate } from '../utils/token'
const router = Router()
const BASE_URL = 'http://mockly-profile-service:3005/users'
const HEADERS = {
  'Content-Type': 'application/json',
}

// POST /login
// Checks if user exists and Login User
router.post('/', async (req, res) => {
  try {
    const { body } = req
    // sending POST request to /users/credentials to validate andrewID and password with DB entry
    const response = await fetch(`${BASE_URL}/credentials`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    const responseJSON = await response.json()
    if (response.status == 200) {
      // user validated
      const token = generate(responseJSON._id)
      res.status(response.status).json({ token, ...responseJSON })
    } else {
      /**
       * 404 - user not found
       * 401 - invalid credentials
       */
      res.status(response.status).json(responseJSON)
    }
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
