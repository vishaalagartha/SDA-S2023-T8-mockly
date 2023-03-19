import request from "../utils/request"

const createInterview = async (interviewData) => {
  request('interview', {
    method: 'POST',
    body: JSON.stringify(interviewData)
  }).then(console.log)
}

export { createInterview}
