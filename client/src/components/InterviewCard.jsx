import { Card, Divider, Button, Space } from 'antd'
import { fieldMapping } from '../utils/constants'
import dayjs from 'dayjs'

const InterviewCard = (interview) => {
  const { time, interviewer, preferences } = interview
  const { andrewId } = interviewer
  const { setSelectedFeedbackForm } = setSelectedFeedbackForm
  const { setOpenFeedbackForm } = setOpenFeedbackForm
  const { field, interviewer: interviewerType, difficulty } = preferences
  const isUpcoming = dayjs().isBefore(dayjs(time))
  const formattedTime = dayjs(time).format('MM/DD/YY h A')
  return (
    <Card className='w-10 m-3'>
      <Space direction='vertical' className='text-center'>
        <Card.Meta
          avatar={fieldMapping[field].icon}
          title={formattedTime}
        ></Card.Meta>
        <Divider />
        <p>
          {fieldMapping[field].string} with a {interviewerType}
        </p>
        <p>Interviewer: {andrewId}</p>
        <p>Level: {difficulty}</p>
        <Divider />
        {isUpcoming ? (
          <Button danger>Delete</Button>
        ) : (
          <>
            <Button type='primary'>Launch Meeting</Button>
            <Button
              type='default'
              onClick={(e) => {
                e.stopPropagation()
                //  this should be an ID instead
                setSelectedFeedbackForm(andrewId + time)
                setOpenFeedbackForm(true)
              }}
            >
              Complete Feedback
            </Button>
          </>
        )}
      </Space>
    </Card>
  )
}

export default InterviewCard
