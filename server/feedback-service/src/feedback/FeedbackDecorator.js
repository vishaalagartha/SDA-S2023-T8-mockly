class FeedbackDecorator {
  constructor(feedback) {
    this.feedback = feedback;
  }

  addQuestions(newQuestionsObj={}){
      this.feedback.addQuestions(newQuestionsObj);
  }
}

export default FeedbackDecorator