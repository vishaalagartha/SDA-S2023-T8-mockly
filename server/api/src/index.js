import express from 'express'
import cors from 'cors'
import { generate } from './utils/token'

const PORT = parseInt(process.env.PORT || '3001')

const app = express()
  .use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1']
  }))
  .use(express.json())

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from the API' })
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'vishaal' && password === 'password') {
    const token = generate('id')
    res.json({ username: 'username', token })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
