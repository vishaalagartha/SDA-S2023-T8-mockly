import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d'

const generate = (uid) => {
  return jwt.sign({ uid }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

const validate = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    console.error(err)
    return null
  }
}

export { generate, validate }
