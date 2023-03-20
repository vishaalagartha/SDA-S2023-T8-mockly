import request from "../utils/request"

const createInterview = async (interviewData) => request('matching/interviews', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  })

export { createInterview}
