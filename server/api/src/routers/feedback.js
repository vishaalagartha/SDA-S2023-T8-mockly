
import { Router } from 'express'
import fetch from 'node-fetch'
import { headers } from '../utils/constants'

export default Router()
  .get('/feedback', async (request, response) => {
    const options = { method: 'GET', headers }
    const { userId } = request.query
    try {
      const resp = await fetch(`http://mockly-matching-service:3002/feedback?userId=${userId}`, options)
      const receivedFeedback = await resp.json()
      response.json(receivedFeedback)
    } catch (e) {
      response.status(500).send({ message: 'Internal server error '})
    }
  })
  /*
  .post('/interviews', async (request, response) => {
    const { body } = request
    const options = { method: 'POST', body: JSON.stringify(body), headers }
    try {
      const resp = await fetch('http://mockly-matching-service:3002/interviews', options)
      const match = await resp.json()
      response.json(match)
    } catch (e) {
      response.status(500).send({ message: 'Internal server error '})
    }
  })
  */