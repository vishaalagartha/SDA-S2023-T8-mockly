import { validate } from '../utils/token'

const authenticate = async (
  req,
  res,
  next
) => {
  const authHeader = req.header('authorization')
  if (!authHeader) {
    return res.status(401).send('Missing authorization header.')
  }
  const token = authHeader.split(' ')[1]
  const decoded = validate(token)

  if (!decoded) {
    return res.status(401).send('Unauthorized.')
  }

  return next()
}

export default authenticate
