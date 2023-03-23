class Preference {
  constructor(builder) {
    this.interviewer = builder.interviewer
    this.field = builder.field
    this.difficulty = builder.difficulty
  }

  toObject () {
    const obj = { interviewer: this.interviewer, field: this.field, difficulty: this.difficulty }
    return obj
  }

  isMatch (other) {
    const { interviewer, fields } = other
    return interviewer === this.interviewer && fields.indexOf(this.field) !== -1
  }
}

export default Preference
