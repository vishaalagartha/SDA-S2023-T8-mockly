import { Row, Button, Typography, Divider } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import InterviewCard from '../components/InterviewCard'
import InterviewModal from '../components/InterviewModal'
import { interviewsSelector } from '../store/interviewsSlice'

const DashboardPage = () => {
  const [openInterviewModal, setOpenInterviewModal] = useState(false)
  const interviews = useSelector(interviewsSelector)

  return (
    <div>
      <Row>
        <Typography.Title level={2}>Upcoming Interviews</Typography.Title>
      </Row>
      <Row>
        {interviews.map((interview, i) => <InterviewCard {...interview} key={i} />)}
      </Row>
      <Divider />
      <Row justify="center mb-5">
        <InterviewModal open={openInterviewModal} setOpen={setOpenInterviewModal} />
        <Button type="primary" onClick={() => setOpenInterviewModal(true)}>Create new interview</Button>
      </Row>
    </div>
  )
}

export default DashboardPage
