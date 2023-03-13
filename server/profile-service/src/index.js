import express from 'express'
import cors from 'cors'
import * as Database from './utils/Database'

const PORT = parseInt(process.env.PORT || '3005')

const app = express()
  .use(cors({
    origin: 'http://localhost:3001'
  }))

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from Profile' })
})

Database.connect()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
