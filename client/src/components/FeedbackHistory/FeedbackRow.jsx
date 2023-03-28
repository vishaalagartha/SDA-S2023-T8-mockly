import { Card, } from "antd"
import dayjs from 'dayjs'

const FeedbackRow = (feedback) => {
  // eslint-disable-next-line no-unused-vars
  const { time, reviewer, answers } = feedback
  const formattedTime = dayjs(time).format('MM/DD/YY h A')
  return (
    <Card className="w-10 m-3">
      <p> {formattedTime} | {reviewer} </p>
    </Card>
  )
}

export default FeedbackRow
