class FeedbackDecorator {
  constructor(feedback) {
    this.feedback = feedback;
  }


  operation(){
      return this.feedback.operation();
  }
}

export default FeedbackDecorator