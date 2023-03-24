import express from 'express'
import cors from 'cors'
import MatchController from './controllers/MatchController'
import PreferenceBuilder from './preferences/PreferenceBuilder'
import * as Database from './utils/Database'

const PORT = parseInt(process.env.PORT || '3003')

const app = express().use(
  cors({
    origin: 'http://localhost:3001',
  })
).use(express.json())

Database.connect()

app.get('/interviews', (req, res) => {
  res.json({ message: 'GET interviews response' })
})

app.post('/matches', async (request, response) => {
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

app.post('/interviews', async (request, response) => {
  const { interviewer, interviewee, field, difficulty, interviewerType, time } = request.body
  const preference = new PreferenceBuilder().field(field).difficulty(difficulty).interviewer(interviewerType).make()
  const preferenceObj = preference.toObject()
  try {
    const interview = await MatchController.create(interviewee, interviewer, preferenceObj, time)
    response.json(interview)
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
