class Feedback {
  constructor(questions, response) {
    this.reviewer = response.reviewer
    this.reviewee= response.reviewee
    this.questions = questions
    this.answers = response.answers
  }

  toObject () {
    const obj = { reviewer : this.reviewer, reviewee: this.reviewee, questions: this.questions, answers: this.answers };
    return obj;
  }

  //  save to MongoDB. not implemented yet
  save(){

  }

  //  
  addQuestions(newQuestionsObj){
    this.questions = {...this.questions, ...newQuestionsObj}
  }

}

export default Feedback