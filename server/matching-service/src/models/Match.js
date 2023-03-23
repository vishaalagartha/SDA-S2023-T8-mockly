
import mongoose, { Schema } from 'mongoose'

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
  time: Number,
  preferences: Object
})

export default mongoose.model('Match', MatchSchema)
