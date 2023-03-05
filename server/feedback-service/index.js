import express from 'express'

const PORT = parseInt(process.env.PORT || '3002')

const app = express()

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello from Feedback' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
