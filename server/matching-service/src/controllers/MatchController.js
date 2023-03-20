import { MatchSchema } from "../models/MatchSchema"
import PreferenceBuilder from "../preferences/PreferenceBuilder"

class MatchController {
  /*
  * Create a match between a interviewer and interviewee
  */
  create(interviewer, interviewee) {
    return new MatchSchema({ interviewer, interviewee })
  }

  /*
  *
  */
  time(time) {
    MatchSchema.set({ time })
    return 
  }

  /*
  *
  */

  /*
  * Find all potential matches given preferences and schedule
  */
  findMatches(preferences, schedule) {
    const { interviewer, field, difficulty } = preferences
    const preference = new PreferenceBuilder().interviewer(interviewer).field(field).difficulty(difficulty).make()
    /*
      Pseudocode:
      interviewers = getAllUsers().filter(user => user.isInterviewer)
      interviewers = preference.filterByPreferences(interviewers, preference)
      interviewers = Schedulercomponent.filterBySchedule(interviewers)


      return interviewers
    */
  }
}

export default MatchController
