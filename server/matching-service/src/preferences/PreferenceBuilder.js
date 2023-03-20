import Preference from "./Preference"

class PreferenceBuilder {
  constructor() {
    return this
  }

  /*
  * Set interviewer
  * Options: peer, expert
  */
  interviewer(interviewer){
    this.interviewer = interviewer
    return this
  }

  /*
  * Set field and return Preference object
  * Options: DATA_STRUCTURES_ALGORITHMS, SYSTEM_DESIGN, DATA_SCIENCE,
  * FRONTEND, BACKEND, BEHAVIORAL
  */
  field(field){
    this.field = field
    return this
  }

  /*
  * Set difficulty and return Preference object
  * Options: introductory, intermediate, advanced
  */
  difficulty(difficulty){
    this.difficulty = difficulty
    return this
  }

  /*
  * Build Preference object and return it
  */
  make() {
    return new Preference(this)
  }
}

export default PreferenceBuilder
