import { useEffect, useState } from "react"
import dayjs from 'dayjs'
import { Modal, Row, Form, Radio, Tag, Typography, Select, Steps, Divider, Button, message, DatePicker } from "antd"
import { useForm } from "antd/es/form/Form"
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons"
import { createInterview } from "../api/interview"

const InterviewModal = ({ open, setOpen }) => {
  const steps = [1, 2, 3, 4]
  const [form] = useForm()
  const [step, setStep] = useState(0)
  const [messageApi, contextHolder] = message.useMessage()
  const [times, setTimes] = useState([])
  const [timeStatus, setTimeStatus] = useState('success')


  useEffect(() => {
    form.resetFields()
    setTimes([])
    setStep(0)
  }, [open])

  const handleStepBack = () => {
    step > 0 && setStep(step - 1)
  }

  const handleStepForward = async () => {
    step < steps.length - 1 && setStep(step + 1)
  }

  const handleSubmit = async () => {
    try {
      await form.validateFields()
      if (!times.length) {
        throw new Error('Please select at least 1 time slot.')   
      }   
      const formattedTimes = times.map(t => dayjs(t, 'MM/DD/YY h A').unix())
      // eslint-disable-next-line no-unused-vars
      const { date, ...data } = { ...form.getFieldsValue(), times: formattedTimes }
      const res = await createInterview(data)
      console.log(res)
    } catch (e) {
      messageApi.open({ type: 'error', content: 'Failed to request interview.' })
    }
  }

  const addTimeSlot = (time) => {
    form.setFieldValue('date', '')
    const formattedTime = time.format('MM/DD/YY h A')
    const newTimes = times.indexOf(formattedTime) === -1 ? [...times, time.format('MM/DD/YY h A')] : [...times]
    setTimes(newTimes)
    setTimeStatus('success')
  }

  const removeTimeSlot = (idx) => {
    if (times.length === 1) setTimeStatus('error')
    setTimes(times.filter((_, i) => i !== idx))
  }

  return (
    <Modal 
      open={open}
      onCancel={() => setOpen(false)}
      onOk={() => setOpen(false)}
      width={1000}
      title={<Row justify="center"><Typography.Title level={1}>Customize your interview</Typography.Title></Row>}
      footer={
        <>
        <Divider className="m-5"/>
        <Steps 
          progressDot
          current={step}
          items={steps}/>
          <Row justify="center" className="m-5">
            <LeftCircleTwoTone className="m-3" role="button" style={{ fontSize: 36 }} twoToneColor={step === 0 ? "#f5f5f5" : ''} onClick={handleStepBack} />
            <RightCircleTwoTone className="m-3" role="button" style={{ fontSize: 36 }} twoToneColor={step === steps.length - 1 ? "#f5f5f5" : ''} onClick={handleStepForward} />
          </Row>
          <Row justify="center" className="m-5">
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
          </Row>
        </>
      }>
        {contextHolder}
        <Form
          form={form}>
            <div className={'text-center' + (step === 0 ? '' : ' d-none')}>
              <Row justify="center" className="m-5">
                <Typography.Title level={3}>Who would you like to interview with?</Typography.Title>
              </Row>
              <Row justify="center">
                <Form.Item name="interviewer" rules={[{ required: true, message: 'Please select an interviewer type.' }]}>
                  <Radio.Group buttonStyle="solid" className="text-center">
                    <Radio.Button value="peer">Peer</Radio.Button>
                    <Radio.Button value="expert">Industry Expert</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Row>
            </div>
          <div className={'text-center' + (step === 1 ? '' : ' d-none')}>
            <Row justify="center" className="m-5">
              <Typography.Title level={3}>What field would you like to focus on?</Typography.Title>
            </Row>
              <Row justify="center">
                <Form.Item name="field" rules={[{ required: true, message: 'Please select a field of focus.' }]}>
                  <Select
                    style={{ minWidth: 300 }}
                    options={[
                      { value: 'DATA_STRUCTURES_ALGORITHMS', label: 'Data Structures & Algorithms' },
                      { value: 'SYSTEM_DESIGN', label: 'System Design' },
                      { value: 'DATA_SCIENCE', label: 'Data Science' },
                      { value: 'FRONTEND', label: 'Frontend' },
                      { value: 'BACKEND', label: 'Backend' },
                      { value: 'BEHAVIORAL', label: 'Behavioral' },
                    ]}
                  />
                </Form.Item>

              </Row>
          </div>
          <div className={'text-center' + (step === 2 ? '' : ' d-none')} >
            <Row justify="center" className="m-5">
              <Typography.Title level={3}>What level of expertise are you? How challenging would you like the interview to be?</Typography.Title>
            </Row>
            <Row justify="center">
              <Form.Item name="difficulty" rules={[{ required: true, message: 'Please select a difficulty level' }]}>
                <Radio.Group buttonStyle="solid" className="text-center">
                  <Radio.Button value="introductory">Introductory</Radio.Button>
                  <Radio.Button value="intermediate">Intermediate</Radio.Button>
                  <Radio.Button value="advanced">Advanced</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Row>
          </div>
          <div className={'text-center' + (step === 3 ? '' : ' d-none')} >
            <Row justify="center" className="m-5">
              <Typography.Title level={3}>Please select your available time slots in the next 3 weeks.</Typography.Title>
            </Row>
            <Row justify="center">
              <Form.Item name="date" validateStatus={timeStatus} help={timeStatus === 'error' ? 'Please select at least 1 time slot.' : ''}>
                <DatePicker showTime={{ use12Hours: true }} format="MM/DD/YY h A" onOk={addTimeSlot} />
              </Form.Item>
            </Row>
            <Row>
              {times.map((t, i) => {
                return (
                  <Tag key={i} closable onClose={() => removeTimeSlot(i)} className="d-flex align-items-center"><div>{t}</div></Tag>
                )
              })}
            </Row>
          </div>
        </Form>
      </Modal>
  )
}

export default InterviewModal
