class Feedback {
  constructor(response) {
    this.reviewer = response.reviewer
    this.reviewee= response.reviewee
    this.questions = {
      B1: {
        question: "How would you rate this interview experience?",
        type: "1-5"
      },
      B2: {
        question: "Any additional comments?",
        type: "text"
      }
    }
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