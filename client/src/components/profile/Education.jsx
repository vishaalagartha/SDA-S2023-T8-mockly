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
import { PlusOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const EducationCard = () => {
  const [addEducationMode, setAddEducationMode] = useState(false)
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      schoolName: 'Carnegie Mellon University',
      educationLevel: 'Masters Degree',
      startDate: new Date(2021, 8).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      }),
      endDate: new Date(2023, 12).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      }),
      major: 'Computer Science',
      minor: 'Business',
      gpa: '3.8',
    },
  ])

  const handleAddEducationClick = () => {
    setAddEducationMode(true)
  }

  const handleSaveEducationClick = (values) => {
    setEducationList([...educationList, values])
    setAddEducationMode(false)
  }

  const handleCancelEducationClick = () => {
    setAddEducationMode(false)
  }

  const renderEducationList = () => {
    if (educationList.length === 0) {
      return <Paragraph>No education information available.</Paragraph>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={educationList}
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
          </List.Item>
        )}
      />
    )
  }

  const renderAddEducationForm = () => {
    return (
      <Form layout='vertical' onFinish={handleSaveEducationClick}>
        <Form.Item
          label='School Name'
          name='schoolName'
          rules={[{ required: true, message: 'Please input the school name' }]}
        >
          <Input />
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
              <Select>
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
              <Input />
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
              <DatePicker picker='month' style={{ width: '100%' }} />
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
              <DatePicker picker='month' style={{ width: '100%' }} />
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
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Minor' name='minor'>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <div className='user-right-card--button-container'>
            <Button
              className='user-right-card--cancel-btn'
              type='default'
              shape='round'
              onClick={handleCancelEducationClick}
            >
              Cancel
            </Button>
            <Button
              className='user-right-card--save-btn'
              type='primary'
              shape='round'
              onClick={handleCancelEducationClick}
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
