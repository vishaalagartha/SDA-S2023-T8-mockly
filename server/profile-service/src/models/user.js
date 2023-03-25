import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  andrewId: String,
  password: String,
  firstName: String,
  lastName: String,
  organization: String,
  position: String,
  email: String,
  phoneNumber: String,
  pronouns: String,
  gender: String,
  ethnicity: String,
  summary: String,
  skills: [{ title: String }],
  courses: [{ title: String }],
  education: [
    {
      institution: String,
      educationLevel: String,
      degree: String,
      major: String,
      minor: String,
      startDate: String,
      endDate: String,
      gpa: Number,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      location: String,
      description: String,
    },
  ],
  projects: [
    {
      title: String,
      url: String,
      description: String,
      startDate: Date,
      endDate: Date,
    },
  ],
})

userSchema.statics.findById = function (id) {
  return this.findOne({ _id: id }).exec()
}

const User = mongoose.model('User', userSchema)

export default User
