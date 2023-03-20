import express from 'express'

const PORT = parseInt(process.env.PORT || '3003')

const app = express()

app.get('/interviews', (req, res) => {
  res.json({ message: 'GET interviews response' })
})

app.post('/interviews', (req, res) => {
  res.json({ message: 'POST interviews response' })
})

app.delete('/interviews', (req, res) => {
  res.json({ message: 'DELETE interviews response' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
