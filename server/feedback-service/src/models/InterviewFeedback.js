import mongoose, { Schema, discriminator } from 'mongoose'
import {BaseFeedbackSchema} from './baseFeedback'

const InterviewFeedbackSchema = BaseFeedbackSchema.discriminator("InterviewFeedbackResponseForm", new mongoose.Schema({
  // uuid of interviewer
  reviewer: {
    required: true,
    type: String
  },
  // uuid of interviewee
  reviewee: {
    required: true,
    type: String
  },
  //  for now, have answers as an object
  answers:  {
    type: Map,
    of: String
  }
  
}))

export default mongoose.model('InterviewFeedback', InterviewFeedbackSchema)
