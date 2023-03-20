import { Router } from "express"
import login from './login'
import matching from './matching'
import authenticate from "../middlewares/authenticate"

export default Router()
  .use('/login', login)
  .use('/matching', authenticate, matching)
  .get('/healthcheck', (_req, res) => res.sendStatus(200))