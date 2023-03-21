import { Router } from 'express'
import login from './login'
import matching from './matching'
import authenticate from '../middlewares/authenticate'
import userProfile from './userProfile'

export default Router()
  .use('/login', login)
  .use('/matching', authenticate, matching)
  .use('/users', userProfile)
  .get('/healthcheck', (_req, res) => res.sendStatus(200))
