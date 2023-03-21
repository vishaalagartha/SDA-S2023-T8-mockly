import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Typography,
  List,
} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { addEducation, removeEducation } from '../../store/userSlice'
import { getUserEducation } from '../../store/userSelector'
import { useDispatch, useSelector } from 'react-redux'

const { Title, Paragraph } = Typography

const EducationCard = () => {
  const initialFormState = {
    schoolName: '',
    educationLevel: '',
    startDate: null,
    endDate: null,
    major: '',
    minor: '',
    gpa: '',
  }

  const [addEducationMode, setAddEducationMode] = useState(false)

  const dispatch = useDispatch()
  const userEducationList = useSelector(getUserEducation)

  const [formData, setFormData] = useState({ ...initialFormState })

  const handleAddEducationClick = () => {
    setFormData(initialFormState)
    setAddEducationMode((prevAddMode) => !prevAddMode)
  }

  const handleAddNewEducation = () => {
    dispatch(addEducation(formData))
    setAddEducationMode(false)
  }

  const handleCancelAddEducationClick = () => {
    setFormData(initialFormState)
    setAddEducationMode(false)
  }

  const deleteEducationDetails = (educationObj) => {
    dispatch(removeEducation(educationObj))
  }

  const renderEducationList = () => {
    if (userEducationList.education.length === 0) {
      return <Paragraph>No education information available.</Paragraph>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={userEducationList.education}
        renderItem={(education) => (
          <List.Item>
            <Title level={3} style={{ marginBottom: '5px' }}>
              {education.schoolName}
            </Title>
            <Title level={4} style={{ marginTop: '5px' }}>
              {education.educationLevel}
            </Title>
            <Paragraph>
              {education.startDate} - {education.endDate}
            </Paragraph>
            <Paragraph>
              {education.major} {education.minor ? `(${education.minor})` : ''}
            </Paragraph>
            <Paragraph strong>GPA: {education.gpa}</Paragraph>
            <Button danger onClick={() => deleteEducationDetails(education)}>
              <DeleteOutlined />
            </Button>
          </List.Item>
        )}
      />
    )
  }

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
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

  const renderAddEducationForm = () => {
    return (
      <Form layout='vertical' onFinish={handleAddNewEducation}>
        <Form.Item
          label='School Name'
          name='schoolName'
          rules={[{ required: true, message: 'Please input the school name' }]}
        >
          <Input
            name='schoolName'
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={18}>
            <Form.Item
              label='Education Level'
              name='educationLevel'
              rules={[
                {
                  required: true,
                  message: 'Please select the education level',
                },
              ]}
            >
              <Select
                value={formData.educationLevel}
                onChange={(value) =>
                  handleSelectChange(value, 'educationLevel')
                }
              >
                <Select.Option value='High School'>High School</Select.Option>
                <Select.Option value='Associates Degree'>
                  Associates Degree
                </Select.Option>
                <Select.Option value='Bachelors Degree'>
                  Bachelors Degree
                </Select.Option>
                <Select.Option value='Masters Degree'>
                  Masters Degree
                </Select.Option>
                <Select.Option value='PhD'>PhD</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label='GPA' name='gpa'>
              <Input
                name='gpa'
                value={formData.gpa}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label='Start Date'
              name='startDate'
              rules={[
                { required: true, message: 'Please select the start date' },
              ]}
            >
              <DatePicker
                name='startDate'
                value={formData.startDate}
                picker='month'
                style={{ width: '100%' }}
                onChange={handleStartDateChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='End Date'
              name='endDate'
              rules={[
                { required: true, message: 'Please select the end date' },
              ]}
            >
              <DatePicker
                name='endDate'
                value={formData.endDate}
                picker='month'
                style={{ width: '100%' }}
                onChange={handleEndDateChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label='Major'
              name='major'
              rules={[{ required: true, message: 'Please input the major' }]}
            >
              <Input
                name='major'
                value={formData.major}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Minor' name='minor'>
              <Input
                name='minor'
                value={formData.minor}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <div className='user-right-card--button-container'>
            <Button
              className='user-right-card--cancel-btn'
              type='default'
              shape='round'
              onClick={handleCancelAddEducationClick}
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
      title='Education'
      extra={
        <Button type='text' onClick={handleAddEducationClick}>
          <PlusOutlined />
        </Button>
      }
    >
      {renderEducationList()}
      {addEducationMode && renderAddEducationForm()}
    </Card>
  )
}

export default EducationCard
