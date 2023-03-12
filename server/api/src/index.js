import express from 'express'

const PORT = parseInt(process.env.PORT || '3001')

const app = express()

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from the API' })
})

app.get('/api/login', (req, res) => {
  res.json({ username: 'username' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
