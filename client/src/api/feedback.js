import request from "../utils/request"

const fetchFeedback = async (userId) => request(`/feedback?userId=${userId}`, {
  method: 'GET'
})
/*
const findMatches = async (interviewData) => request('matching/matches', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  })

const createInterview = async (interviewData) => request('matching/interviews', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  })
*/

export { fetchFeedback }
