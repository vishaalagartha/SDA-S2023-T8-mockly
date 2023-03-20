import { Router } from 'express'

export default Router()
  /**
   * Login
   */
  .post('/interviews', async (request, response) => {
    console.log(request.body)
    response.send({ message: 'Successfully created interview.'})
  })