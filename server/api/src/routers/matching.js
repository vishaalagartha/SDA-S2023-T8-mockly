
import { Router } from 'express'
import fetch from 'node-fetch'
import { headers } from '../utils/constants'

export default Router()
  /**
   * Login
   */
  .post('/interviews', async (request, response) => {
    const { body } = request
    const options = { method: 'POST', body: JSON.stringify(body), headers }
    const resp = await fetch('http://mockly-matching-service:3003/interviews', options)
    response.json(resp)
  })