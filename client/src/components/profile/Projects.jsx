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
import { PlusOutlined, LinkOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProjects } from '../../store/userSelector'
import { addProject, removeProject } from '../../store/userSlice'

const { Title, Paragraph } = Typography
const { Item } = List

const ProjectsCard = () => {
  const initialFormState = {
    name: '',
    url: '',
    startDate: null,
    endDate: null,
    description: '',
  }

  const dispatch = useDispatch()

  const [addProjectMode, setAddProjectMode] = useState(false)
  const [formData, setFormData] = useState({ ...initialFormState })
  const userProjectsList = useSelector(getUserProjects)

  const handleAddProjectClick = () => {
    setFormData(initialFormState)
    setCurrent(false)
    setAddProjectMode((prevMode) => !prevMode)
  }

  const handleAddNewProject = () => {
    dispatch(addProject(formData))
    setCurrent(false)
    setAddProjectMode(false)
  }

  const handleCancelProjectClick = () => {
    setFormData(initialFormState)
    setCurrent(false)
    setAddProjectMode(false)
  }

  const deleteProjectDetails = (project) => {
    dispatch(removeProject(project))
  }

  const renderProject = () => {
    if (userProjectsList.projects.length === 0) {
      return <Paragraph>No project information available.</Paragraph>
    }

    return (
      <List
        itemLayout='vertical'
        dataSource={userProjectsList.projects}
        renderItem={(project, index) => (
          <Item key={index}>
            <Item.Meta
              title={
                <Button
                  type='link'
                  href={project.url || null}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ paddingLeft: 0 }}
                >
                  <Title level={3} style={{ marginBottom: '5px' }}>
                    {project.name} {project.url && <LinkOutlined />}
                  </Title>
                </Button>
              }
              description={
                <>
                  <Paragraph>
                    {project.startDate} - {project.endDate || 'Current'}
                  </Paragraph>
                  <Paragraph style={{ whiteSpace: 'pre-wrap' }}>
                    {project.description}
                  </Paragraph>
                </>
              }
            />
            <Button danger onClick={() => deleteProjectDetails(project)}>
              <DeleteOutlined />
            </Button>
          </Item>
        )}
      />
    )
  }

  const [current, setCurrent] = useState(false)

  const handleCurrentChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      endDate: null,
    }))
    setCurrent(e.target.checked)
  }

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
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

  const renderAddProjectForm = () => {
    return (
      <Form layout='vertical' onFinish={handleAddNewProject}>
        <Form.Item
          label='Name'
          name='name'
          rules={[
            { required: true, message: 'Please enter the name of the project' },
          ]}
          hasFeedback
        >
          <Input
            name='name'
            placeholder='Project Name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label='URL'
          name='url'
          rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
          hasFeedback
        >
          <Input
            name='url'
            placeholder='Project URL'
            value={formData.url}
            onChange={handleInputChange}
          />
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
                value={formData.startDate}
                onChange={handleStartDateChange}
                picker='month'
                style={{ width: '100%' }}
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
                value={formData.endDate}
                onChange={handleEndDateChange}
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
          <Input.TextArea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            placeholder='Project Description'
          />
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
            htmlType='submit'
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
