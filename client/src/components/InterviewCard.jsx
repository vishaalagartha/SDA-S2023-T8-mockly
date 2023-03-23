import { Card, Divider } from "antd"
import { fieldMapping } from "../utils/constants"
import dayjs from 'dayjs'

const InterviewCard = (interview) => {
  const { time, interviewer, preferences } = interview
  const { field, interviewer: interviewerType, difficulty } = preferences
  const formattedTime = dayjs(time).format('MM/DD/YY h A')
  return (
    <Card className="w-10 m-3">
      <Card.Meta avatar={fieldMapping[field].icon} title={formattedTime}></Card.Meta>
      <Divider />
      <p>{fieldMapping[field].string}</p>
      <p>with</p>
      <p>{interviewer} ({interviewerType})</p>
      <p>Level: {difficulty}</p>
    </Card>
  )
}

export default InterviewCard
