class FeedbackDecorator {
  constructor(feedback) {
    this.feedback = feedback;
  }

  addQuestions(newQuestionsObj={}){
      console.log("Inside base decorator", newQuestionsObj)
      this.feedback.addQuestions(newQuestionsObj);
      console.log("Leaving base decorator")
  }
}

export default FeedbackDecorator