class Feedback {
  constructor(response) {
    this.reviewer = response.reviewer
    this.reviewee= response.reviewee
    this.answers = response.answers
  }

  toObject () {
    const obj = { reviewer : this.reviewer, reviewee: this.reviewee, answers: this.answers }
    return obj
  }

}

export default Feedback