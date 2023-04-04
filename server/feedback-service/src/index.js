import express from 'express'
import Feedback from './feedback/Feedback'
import LanguageDecorator from "./feedback/LanguageDecorator";
import TechnicalDecorator from "./feedback/TechnicalDecorator";
import ProfessionalismDecorator from './feedback/ProfessionalismDecorator';
import FeedbackController from './controllers/FeedbackController'
//  import * as Database from './utils/Database'

const PORT = parseInt(process.env.PORT || '3002')

const app = express()

app.get('/api/', (req, res) => {
  
  res.json({ message: 'Hello from Feedback' })
})

app.get('/feedback', async (request, response) => {
  console.log("IN FEEDBACK SERVICE SOURCE")
  const { userId } = request.query
  try {
    const receivedFeedback = await MatchController.getByUserId(userId)
    response.json(receivedFeedback)
  } catch (e) {
    console.error(e)
    response.status(500).send({ message: 'Internal server error.'})
  }
})

app.post('/feedback', async (request, response) => {
  console.log("in feedback api")
  const { answers , reviewer, time, reviewee} = request.body

  try {
    console.log(answers , reviewer, time, reviewee)
    const feedback= await FeedbackController.create(reviewer, reviewee, time, answers)
    const res = await fetch(`http://mockly-profile-service:${PORTS.PROFILE}/users/${interview.interviewer}`, { method: 'GET' })
    const interviewerDetails = await res.json()
    console.log('interview', interview.toObject())
    console.log('details', interviewerDetails)
    const data = { ...interview.toObject(), interviewer: interviewerDetails }
    response.json(data)
  } catch (e) {
    console.error(e)
    response.status(500).send({ message: 'Internal server error.'})
  }
})

app.get('/test', (req, res) => {
  const feedbackObj = new Feedback({},{
    reviewer: 'a',
    reviewee: 'b',
    answers: {}
  })
  const l1 = new LanguageDecorator(feedbackObj)
  const t1 = new  TechnicalDecorator(l1)
  const p1 = new ProfessionalismDecorator(t1)

  p1.addQuestions()
  res.json(feedbackObj.toObject())
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
