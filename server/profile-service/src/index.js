import express from 'express'
import cors from 'cors'
import * as Database from './utils/Database'
import userRoutes from './routes/userRoutes'

const PORT = parseInt(process.env.PORT || '3005')

const app = express().use(
  cors({
    origin: ['http://localhost:3001', 'http://localhost:3003'],
  })
)

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from Profile' })
})
app.use('/', userRoutes)

Database.connect()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
