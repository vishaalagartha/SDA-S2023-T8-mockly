import { Schema } from 'mongoose'

const MatchSchema = new Schema({
  // uuid of interviewer
  interviewer: {
    required: true,
    type: String
  },
  // uuid of interviewee
  interviewee: {
    required: true,
    type: String
  },
  timestamp: Number,
  field: String,
  difficulty: String,
})

export { MatchSchema }
