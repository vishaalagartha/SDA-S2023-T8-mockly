import InterviewFeedback from "../models/InterviewFeedback"

import fetch from 'node-fetch'

class FeedbackController {
  /*
  * Create a feedback result created by reviewer for the reviewee
  */
  async create(reviewer, reviewee, time, answers) {
    const ifs = new InterviewFeedback ({ reviewer, reviewee, time, answers })
    await ifs.save()
    return ifs
  }

}

export default new FeedbackController
