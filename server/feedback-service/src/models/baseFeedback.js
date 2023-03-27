import mongoose, { Schema } from 'mongoose'

export const BaseFeedbackSchema = new Schema({
  //  add things hre just in case
})

export default mongoose.model('BaseFeedbackForm', BaseFeedbackSchema)
