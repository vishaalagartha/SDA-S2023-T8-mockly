import React, { useState } from 'react'
import { Card, Avatar, Typography, Form, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const { Title } = Typography

const IdentityCard = () => {
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
      title='Identity'
      extra={
        <Button type='text' onClick={handleEditClick}>
          <EditOutlined />
        </Button>
      }
    >
      <div className='user-identity--avatar-div'>
        <Avatar size={128} />
      </div>
      {editMode ? (
        <>
          <Form layout='vertical'>
            <Form.Item label='Full Name'>
              <Input />
            </Form.Item>
            <Form.Item label='College/Company Name'>
              <Input />
            </Form.Item>
            <Form.Item label='Position/Degree Name'>
              <Input />
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
        </>
      ) : (
        <>
          <Title level={2} className='user-identity--fullname'>
            Full Name
          </Title>
          <Title level={4} className='user-identity--organization'>
            College/Company Name
          </Title>
          <Title level={4} className='user-identity--position'>
            Position/Degree Name
          </Title>
        </>
      )}
    </Card>
  )
}

export default IdentityCard
