import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Checkbox,
  DatePicker,
  Typography,
  List,
} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getUserExperience } from '../../store/userSelector'
import { addExperience, removeExperience } from '../../store/userSlice'

const { Title, Paragraph } = Typography
const { Item } = List

const ExperienceCard = () => {
  const initialFormState = {
    companyName: '',
    position: '',
    startDate: null,
    endDate: null,
    location: '',
    description: '',
  }

  const dispatch = useDispatch()
  const userExperienceList = useSelector(getUserExperience)

  const [addExperienceMode, setAddExperienceMode] = useState(false)
  const [formData, setFormData] = useState({ ...initialFormState })

  const handleAddExperienceClick = () => {
    setFormData(initialFormState)
    setCurrent(false)
    setAddExperienceMode((prevMode) => !prevMode)
  }

  const handleSaveExperienceClick = () => {
    dispatch(addExperience(formData))
    setCurrent(false)
    setAddExperienceMode(false)
  }

  const handleCancelExperienceClick = () => {
    setFormData(initialFormState)
    setCurrent(false)
    setAddExperienceMode(false)
  }

  const deleteExperienceDetails = (experience) => {
    dispatch(removeExperience(experience))
  }

  const renderExperienceList = () => {
    if (userExperienceList.experience.length === 0) {
      return <p>No work experience available.</p>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={userExperienceList.experience}
        renderItem={(experience, index) => (
          <Item key={index}>
            <Title level={3} style={{ marginBottom: '5px' }}>
              {experience.companyName}
            </Title>
            <Title level={4} style={{ marginTop: '5px' }}>
              {experience.position}
            </Title>
            <Paragraph>
              {experience.startDate} - {experience.endDate || 'Current'}
            </Paragraph>
            <Paragraph>{experience.location}</Paragraph>
            <Paragraph style={{ marginTop: '8px' }}>
              {experience.description}
            </Paragraph>
            <Button danger onClick={() => deleteExperienceDetails(experience)}>
              <DeleteOutlined />
            </Button>
          </Item>
        )}
      />
    )
  }

  const [current, setCurrent] = useState(false)

  const handleCurrentChange = (e) => {
    setCurrent(e.target.checked)
  }

  const handleStartDateChange = (_, dateString) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: dateString,
    }))
  }

  const handleEndDateChange = (_, dateString) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      endDate: dateString,
    }))
  }

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  const renderAddExperienceForm = () => {
    return (
      <Form layout='vertical' onFinish={handleSaveExperienceClick}>
        <Form.Item
          label='Company Name'
          name='companyName'
          rules={[{ required: true, message: 'Please input the company name' }]}
        >
          <Input
            name='companyName'
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label='Position'
          name='position'
          rules={[{ required: true, message: 'Please input the position' }]}
        >
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item
              label='Start Date'
              name='startDate'
              rules={[
                { required: true, message: 'Please select the start date' },
              ]}
            >
              <DatePicker
                name='startDate'
                picker='month'
                style={{ width: '100%' }}
                onChange={handleStartDateChange}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label='End Date'
              name='endDate'
              rules={[
                {
                  required: !current,
                  message: 'Please select the end date',
                },
              ]}
            >
              <DatePicker
                name='endDate'
                picker='month'
                style={{ width: '100%' }}
                disabled={current}
                onChange={handleEndDateChange}
              />
            </Form.Item>
          </Col>
          <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item style={{ marginBottom: 0 }}>
              <Checkbox onChange={handleCurrentChange}>Current</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label='Location'
          name='location'
          rules={[{ required: true, message: 'Please input the location' }]}
        >
          <Input
            name='location'
            value={formData.location}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[{ required: true, message: 'Please input the description' }]}
        >
          <Input.TextArea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <div className='user-right-card--button-container'>
            <Button
              className='user-right-card--cancel-btn'
              type='default'
              shape='round'
              onClick={handleCancelExperienceClick}
            >
              Cancel
            </Button>
            <Button
              className='user-right-card--save-btn'
              type='primary'
              shape='round'
              htmlType='submit'
            >
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Card
      className='user-profile-card'
      title='Experience'
      extra={
        <Button type='text' onClick={handleAddExperienceClick}>
          <PlusOutlined />
        </Button>
      }
    >
      {renderExperienceList()}
      {addExperienceMode && renderAddExperienceForm()}
    </Card>
  )
}

export default ExperienceCard
