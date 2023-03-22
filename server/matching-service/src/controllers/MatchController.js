import { MatchSchema } from "../models/MatchSchema"
import PreferenceBuilder from "../preferences/PreferenceBuilder"
import fetch from 'node-fetch'
import { PORTS } from '../utils/constants'

class MatchController {
  /*
  * Create a match between a interviewer and interviewee
  */
  create(interviewer, interviewee, preferences, time) {
    return new MatchSchema({ interviewer, interviewee, preferences, time })
  }

  /*
  * Find all potential matches given preferences and schedule
  */
  async findMatches(preferences, schedule) {
    const { interviewer, field, difficulty } = preferences
    const preference = new PreferenceBuilder().interviewer(interviewer).field(field).difficulty(difficulty).make()
    const res = await fetch(`http://mockly-profile-service:${PORTS.PROFILE}/`, { method: 'GET' })
    const allInterviewers = await res.json()
    const filteredInterviewers = allInterviewers.filter(interviewer => preference.isMatch(interviewer))
    // TODO: filter by schedule
    return filteredInterviewers
  }
}

export default new MatchController
