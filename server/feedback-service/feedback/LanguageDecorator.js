import FeedbackDecorator from "./FeedbackDecorator";

class LanguageDecorator extends FeedbackDecorator{
  operation(){
    //  do the thing you wrapped first
    super.operation();
    //  Do what the Language Decorator should do
  }
}

export default LanguageDecorator