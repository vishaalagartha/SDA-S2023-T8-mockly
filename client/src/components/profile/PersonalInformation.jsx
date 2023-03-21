import { useState } from 'react'
import { Card, Button, Form, Input, Typography, Select } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const { Paragraph } = Typography
const { Option } = Select

const PersonalInformationCard = () => {
  const [editMode, setEditMode] = useState(false)

  const handleEditClick = () => {
    setEditMode((prevEditMode) => !prevEditMode)
  }

  const handleSaveClick = () => {
    // Handle save logic here
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setEditMode(false)
  }

  return (
    <Card
      className='user-profile-card'
      title='Personal Information'
      extra={
        <Button type='text' onClick={handleEditClick}>
          <EditOutlined />
        </Button>
      }
    >
      {editMode ? (
        <Form layout='vertical'>
          <Form.Item label='Email'>
            <Input />
          </Form.Item>
          <Form.Item label='Phone Number'>
            <Input />
          </Form.Item>
          <Form.Item label='Pronouns'>
            <Select defaultValue=''>
              <Option value=''>Select Pronoun</Option>
              <Option value='he'>He/Him</Option>
              <Option value='she'>She/Her</Option>
              <Option value='they'>They/Them</Option>
            </Select>
          </Form.Item>
          <Form.Item label='Gender'>
            <Select defaultValue=''>
              <Option value=''>Select Gender</Option>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
              <Option value='nonbinary'>Non-binary</Option>
            </Select>
          </Form.Item>
          <Form.Item label='Ethnicity'>
            <Select
              placeholder='Select ethnicity'
              defaultValue=''
              style={{ width: '100%' }}
            >
              <Option value=''>Select Ethnicity</Option>
              <Option value='Asian'>Asian</Option>
              <Option value='Black'>Black</Option>
              <Option value='Hispanic or Latino'>Hispanic or Latino</Option>
              <Option value='Native American or Alaska Native'>
                Native American or Alaska Native
              </Option>
              <Option value='White'>White</Option>
              <Option value='Other'>Other</Option>
            </Select>
          </Form.Item>
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
                onClick={handleSaveClick}
              >
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      ) : (
        <>
          <Paragraph>Email Address</Paragraph>
          <Paragraph>Phone Number</Paragraph>
          <Paragraph>Pronouns</Paragraph>
          <Paragraph>Gender</Paragraph>
          <Paragraph>Ethnicity</Paragraph>
        </>
      )}
    </Card>
  )
}

export default PersonalInformationCard
