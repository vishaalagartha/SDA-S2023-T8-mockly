class Preference {
  constructor(builder) {
    this.interviewer = builder.interviewer
    this.field = builder.field
    this.difficulty = builder.difficulty
  }

  isMatch (other) {
    const { interviewer, fields } = other
    return interviewer === this.interviewer && fields.indexOf(this.field) !== -1
  }
}

export default Preference
