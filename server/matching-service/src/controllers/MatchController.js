import Match from "../models/Match"
import PreferenceBuilder from "../preferences/PreferenceBuilder"
import fetch from 'node-fetch'
import { PORTS } from '../utils/constants'

class MatchController {
  /*
  * Create a match between a interviewer and interviewee
  */
  async create(interviewer, interviewee, preferences, time) {
    const match = new Match({ interviewer, interviewee, preferences, time })
    await match.save()
    return match
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
    // return filteredInterviewers
    return allInterviewers.slice(0, 3)
  }
}

export default new MatchController
