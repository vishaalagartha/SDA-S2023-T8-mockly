import express from 'express'
import Feedback from './feedback/Feedback'
import LanguageDecorator from "./feedback/LanguageDecorator";
import TechnicalDecorator from "./feedback/TechnicalDecorator";
import ProfessionalismDecorator from './feedback/ProfessionalismDecorator';
//  import * as Database from './utils/Database'

const PORT = parseInt(process.env.PORT || '3002')

const app = express()

app.get('/api/', (req, res) => {
  
  res.json({ message: 'Hello from Feedback' })
})

app.get('/feedback', async (request, response) => {
  const { userId } = request.query
  try {
    const receivedFeedback = await MatchController.getByUserId(userId)
    response.json(receivedFeedback)
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
