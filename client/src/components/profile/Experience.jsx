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
import { PlusOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Item } = List

const ExperienceCard = () => {
  const [addExperienceMode, setAddExperienceMode] = useState(false)
  const [experienceList, setExperienceList] = useState([
    {
      companyName: 'ABC Corporation',
      position: 'Software Engineer',
      startDate: '01/2020',
      endDate: 'present',
      location: 'San Francisco, CA',
      description:
        "Develop and maintain the company's core web application using React and Node.js",
    },
  ])

  const handleAddExperienceClick = () => {
    setAddExperienceMode(true)
  }

  const handleSaveExperienceClick = (values) => {
    setExperienceList([...experienceList, values])
    setAddExperienceMode(false)
  }

  const handleCancelExperienceClick = () => {
    setAddExperienceMode(false)
  }

  const renderExperienceList = () => {
    if (experienceList.length === 0) {
      return <p>No work experience available.</p>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={experienceList}
        renderItem={(experience, index) => (
          <Item key={index}>
            <Title level={3} style={{ marginBottom: '5px' }}>
              {experience.companyName}
            </Title>
            <Title level={4} style={{ marginTop: '5px' }}>
              {experience.position}
            </Title>
            <Paragraph>
              {experience.startDate} - {experience.endDate}
            </Paragraph>
            <Paragraph>{experience.location}</Paragraph>
            <Paragraph style={{ marginTop: '8px' }}>
              {experience.description}
            </Paragraph>
          </Item>
        )}
      />
    )
  }

  const [current, setCurrent] = useState(false)

  const handleCurrentChange = (e) => {
    setCurrent(e.target.checked)
  }

  const renderAddExperienceForm = () => {
    return (
      <Form layout='vertical' onFinish={handleSaveExperienceClick}>
        <Form.Item
          label='Company Name'
          name='companyName'
          rules={[{ required: true, message: 'Please input the company name' }]}
        >
          <Input />
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
              <DatePicker picker='month' style={{ width: '100%' }} />
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
                picker='month'
                style={{ width: '100%' }}
                disabled={current}
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
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[{ required: true, message: 'Please input the description' }]}
        >
          <Input.TextArea rows={4} />
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
