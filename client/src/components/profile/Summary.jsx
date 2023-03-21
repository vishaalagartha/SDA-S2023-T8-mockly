import React, { useState } from 'react'
import { Card, Typography, Form, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const { Text } = Typography

const SummaryCard = () => {
  const label =
    'What are you passionate about? What are you looking for on Mockly?'
  const [editMode, setEditMode] = useState(false)
  const [summary, setSummary] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleSaveClick = () => {
    // Handle save logic here
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setEditMode(false)
  }

  const handleSummaryChange = (e) => {
    setSummary(e.target.value)
  }

  return (
    <Card
      className='user-profile-card'
      title='Summary'
      extra={
        <Button type='text' onClick={handleEditClick}>
          <EditOutlined />
        </Button>
      }
    >
      {editMode ? (
        <Form layout='vertical'>
          <Form.Item label={label}>
            <Input.TextArea
              value={summary}
              onChange={handleSummaryChange}
              autoSize={{ minRows: 4, maxRows: 8 }}
            />
          </Form.Item>
          <Form.Item>
            <div className='user-right-card--button-container'>
              <Button
                className='user-right-card--cancel-btn'
                type='default'
                shape='round'
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
              <Button
                className='user-right-card--save-btn'
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
          <Text>{summary}</Text>
        </>
      )}
    </Card>
  )
}

export default SummaryCard
