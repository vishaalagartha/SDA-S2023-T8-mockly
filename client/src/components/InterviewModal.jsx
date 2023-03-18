import { Modal } from "antd"

const InterviewModal = ({ open, setOpen }) => {

  return (
    <Modal 
      open={open}
      onCancel={() => setOpen(false)}
      onOk={() => setOpen(false)}
      width={1000}>

      </Modal>
  )
}

export default InterviewModal
