import express from 'express'
import cors from 'cors'
import MatchController from './controllers/MatchController'

const PORT = parseInt(process.env.PORT || '3003')

const app = express().use(
  cors({
    origin: 'http://localhost:3001',
  })
).use(express.json())

app.get('/interviews', (req, res) => {
  res.json({ message: 'GET interviews response' })
})

app.post('/interviews', async (request, response) => {
  const { interviewer, field, difficulty, times } = request.body
  const preferences = { interviewer, field, difficulty }
  const schedule = times
  try {
    const matches = await MatchController.findMatches(preferences, schedule)
    response.json(matches)
  } catch (e) {
    console.error(e)
    response.status(500)
  }
})

app.delete('/interviews', (req, res) => {
  res.json({ message: 'DELETE interviews response' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
