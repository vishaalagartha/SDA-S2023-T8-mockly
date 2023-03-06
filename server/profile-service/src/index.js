import express from 'express'
import * as Database from './utils/Database'

const PORT = parseInt(process.env.PORT || '3005')

const app = express()

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from Profile' })
})

Database.connect()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
