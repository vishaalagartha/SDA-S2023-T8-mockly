import request from "../utils/request"

const findMatches = async (interviewData) => request('matching/matches', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  })

const createInterview = async (interviewData) => request('matching/interviews', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  })


export { findMatches, createInterview }
