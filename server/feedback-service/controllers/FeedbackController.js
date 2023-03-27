import InterviewFeedback from "../models/InterviewFeedback"
import PreferenceBuilder from "../preferences/PreferenceBuilder"
import fetch from 'node-fetch'

class FeedbackController {
  /*
  * Create a feedback result created by reviewer for the reviewee
  */
  async create(reviewer, reviewee, answers) {
    const ifs = new InterviewFeedback ({ reviewer, reviewee, answers })
    await ifs.save()
    return ifs
  }

}

export default new FeedbaclController
