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
import { LinkOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Item } = List

const ProjectsCard = () => {
  const [addProjectMode, setAddProjectMode] = useState(false)
  const [projectList, setProjectList] = useState([
    {
      name: 'E-commerce Website',
      url: 'https://example.com',
      startDate: '06/2021',
      endDate: '09/2021',
      description:
        'Developed an e-commerce website using React, Node.js, and MongoDB. Implemented payment gateway and shopping cart functionality.',
    },
  ])

  const handleAddProjectClick = () => {
    setAddProjectMode(true)
  }

  const handleSaveProjectClick = (values) => {
    setProjectList([...projectList, values])
    setAddProjectMode(false)
  }

  const handleCancelProjectClick = () => {
    setAddProjectMode(false)
  }

  const renderProject = () => {
    if (projectList.length === 0) {
      return <Paragraph>No project information available.</Paragraph>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={projectList}
        renderItem={(project, index) => (
          <Item key={index}>
            <Item.Meta
              title={
                <Button
                  type='link'
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ paddingLeft: 0 }}
                >
                  <Title level={3} style={{ marginBottom: '5px' }}>
                    {project.name} <LinkOutlined />
                  </Title>
                </Button>
              }
              description={
                <>
                  <Paragraph>
                    {project.startDate} - {project.endDate}
                  </Paragraph>
                  <Paragraph>{project.description}</Paragraph>
                </>
              }
            />
          </Item>
        )}
      />
    )
  }

  const [current, setCurrent] = useState(false)

  const handleCurrentChange = (e) => {
    setCurrent(e.target.checked)
  }

  const renderAddProjectForm = () => {
    return (
      <Form layout='vertical'>
        <Form.Item
          label='Name'
          name='name'
          rules={[
            { required: true, message: 'Please enter the name of the project' },
          ]}
        >
          <Input placeholder='Project Name' />
        </Form.Item>
        <Form.Item
          label='URL'
          name='url'
          rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
        >
          <Input placeholder='Project URL' />
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
        <Form.Item label='Description' name='description'>
          <Input.TextArea rows={4} placeholder='Project Description' />
        </Form.Item>
        <div className='user-right-card--button-container'>
          <Button
            className='user-right-card--cancel-btn'
            type='default'
            shape='round'
            onClick={handleCancelProjectClick}
          >
            Cancel
          </Button>
          <Button
            className='user-right-card--save-btn'
            type='primary'
            shape='round'
            onClick={handleSaveProjectClick}
          >
            Save
          </Button>
        </div>
      </Form>
    )
  }

  return (
    <Card
      className='user-profile-card'
      title='Projects'
      extra={
        <Button type='text' onClick={handleAddProjectClick}>
          <PlusOutlined />
        </Button>
      }
    >
      {renderProject()}
      {addProjectMode && renderAddProjectForm()}
    </Card>
  )
}

export default ProjectsCard
