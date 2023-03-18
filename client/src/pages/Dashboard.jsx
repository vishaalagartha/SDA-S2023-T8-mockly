import { Row, Button, Typography, Divider } from 'antd'
import { useState } from 'react'
import InterviewModal from '../components/InterviewModal'

const DashboardPage = () => {

  const [openInterviewModal, setOpenInterviewModal] = useState(false)

  return (
    <div>
      <Row>
        <Typography.Title level={2}>Upcoming Interviews</Typography.Title>
      </Row>
      <Divider />
      <Row justify="center">
        <InterviewModal open={openInterviewModal} setOpen={setOpenInterviewModal} />
        <Button type="primary" onClick={() => setOpenInterviewModal(true)}>Create new interview</Button>
      </Row>
    </div>
  )
}

export default DashboardPage
