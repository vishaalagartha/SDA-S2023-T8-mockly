import { useDispatch } from 'react-redux'
import { Card, Tag, Button, Form, Select, Typography, DatePicker } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useForm } from 'antd/es/form/Form'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserInterviewerDetails } from '../../store/userSelector'
import { setInterviewerDetails } from '../../store/userSlice'
import { updateInterviewerDetailsAPI } from '../../api/userProfile'
import { find } from 'lodash'
import dayjs from 'dayjs'

const { Paragraph } = Typography
const { Option } = Select

const InterviewerDetailsCard = () => {
  const dispatch = useDispatch()
  const [form] = useForm()

  const INTERVIEWER_TYPES = [
    { value: 'peer', text: 'Peer' },
    { value: 'expert', text: 'Expert' },
  ]

  const FIELD_OPTIONS = [
    {
      value: 'DATA_STRUCTURES_ALGORITHMS',
      text: 'Data Structures and Algorithms',
    },
    { value: 'SYSTEM_DESIGN', text: 'System Design' },
    { value: 'DATA_SCIENCE', text: 'Data Science' },
    { value: 'FRONTEND', text: 'Frontend' },
    { value: 'BACKEND', text: 'Backend' },
    { value: 'BEHAVIORAL', text: 'Behavioral' },
  ]

  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(false)

  const interviewer = useSelector(getUserInterviewerDetails).interviewerDetails
  const [timeSlots, setTimeSlots] = useState([])

  useEffect(() => {
    initiateValues()
  }, [interviewer, form])

  const initiateValues = () => {
    setTimeSlots(
      interviewer.time.map((time) => dayjs.unix(time).format('MM/DD/YY h A'))
    )
    form.setFieldsValue({
      type: interviewer.type,
      fields: interviewer.fields,
    })
  }

  const handleEditClick = () => {
    setEditMode((prevEditMode) => !prevEditMode)
    initiateValues()
  }

  const handleAddTimeSlot = (dateTime) => {
    form.setFieldValue('timeSlots', '')
    const formattedTime = dateTime.format('MM/DD/YY h A')
    const newTimeSlots =
      timeSlots.indexOf(formattedTime) === -1
        ? [...timeSlots, dateTime.format('MM/DD/YY h A')]
        : [...timeSlots]
    setTimeSlots(newTimeSlots)
  }

  const handleRemoveTimeSlot = (idx) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== idx))
  }

  const handleSaveClick = async () => {
    setLoading(true)
    const userId = localStorage.getItem('id')
    try {
      const formValues = await form.validateFields()
      const formData = {
        ...formValues,
        time: timeSlots.map((slot) => dayjs(slot, 'MM/DD/YY h A').unix()),
      }
      const res = await updateInterviewerDetailsAPI(userId, { ...formData })
      console.log('Interviewer Details updated: ', res)
      dispatch(setInterviewerDetails(formData))
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
    setEditMode(false)
  }

  const handleCancelClick = () => {
    initiateValues()
    setEditMode(false)
  }

  const renderFields = (fields) => {
    return fields.map((field) => {
      const fieldObj = find(FIELD_OPTIONS, { value: field })
      return (
        <Tag className='user-field-tag' key={fieldObj.value}>
          {fieldObj.text}
        </Tag>
      )
    })
  }

  const renderTimeSlots = (timeSlots, isClosable) => {
    return timeSlots.map((slot, index) => (
      <Tag
        className='user-time-slot-tag'
        closable={isClosable}
        key={`${slot}-${index}`}
        onClose={isClosable ? () => handleRemoveTimeSlot(index) : null}
      >
        {slot}
      </Tag>
    ))
  }

  return (
    <Card
      className='user-profile-card'
      title='Interviewer Details'
      loading={loading}
      extra={
        <Button type='text' onClick={handleEditClick}>
          <EditOutlined />
        </Button>
      }
    >
      {editMode ? (
        <Form form={form} layout='vertical' onFinish={handleSaveClick}>
          <Form.Item
            label='Interviewer Type'
            name='type'
            rules={[
              { required: true, message: 'Interviewer type cannot be empty' },
            ]}
          >
            <Select>
              {INTERVIEWER_TYPES.map((type) => (
                <Option key={type.value} value={type.value}>
                  {type.text}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label='Fields'
            name='fields'
            rules={[{ required: true, message: 'Fields cannot be empty' }]}
          >
            <Select mode='multiple' allowClear>
              {FIELD_OPTIONS.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='Date/Time' name='timeSlots'>
            <DatePicker
              showTime={{ use12Hours: true }}
              format='MM/DD/YY h A'
              onOk={handleAddTimeSlot}
              disabledDate={(current) => {
                const inPast = current && current < dayjs().endOf('day')
                const afterThreeWeeks =
                  current &&
                  current &&
                  current > dayjs().endOf('day').add(3, 'week')
                return inPast || afterThreeWeeks
              }}
            />
          </Form.Item>
          <div>{renderTimeSlots(timeSlots, true)}</div>
          <Form.Item>
            <div className='user-card--button-container'>
              <Button
                className='user-card--cancel-btn'
                type='default'
                shape='round'
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
              <Button
                className='user-card--save-btn'
                type='primary'
                shape='round'
                htmlType='submit'
              >
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      ) : (
        <>
          <Paragraph>{`Interviewer Type: ${
            interviewer.type
              ? find(INTERVIEWER_TYPES, { value: interviewer.type }).text
              : ''
          }`}</Paragraph>
          <Paragraph>Fields:</Paragraph>
          {renderFields(interviewer.fields)}
          <Paragraph>My Availability:</Paragraph>
          {renderTimeSlots(timeSlots, false)}
        </>
      )}
    </Card>
  )
}

export default InterviewerDetailsCard
