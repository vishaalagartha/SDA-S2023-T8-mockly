import React, { useState } from 'react'
import { Card, Typography, Form, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSummary } from '../../store/userSelector'
import { setSummary } from '../../store/userSlice'

const { Text } = Typography

const SummaryCard = () => {
  const dispatch = useDispatch()

  const label =
    'What are you passionate about? What are you looking for on Mockly?'
  const [editMode, setEditMode] = useState(false)

  const userSummary = useSelector(getUserSummary)

  const [formData, setFormData] = useState({
    summary: userSummary.summary,
  })

  const handleEditClick = () => {
    setFormData({ ...userSummary })
    setEditMode((prevEditMode) => !prevEditMode)
  }

  const handleSaveClick = () => {
    dispatch(setSummary(formData))
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setFormData({ ...userSummary })
    setEditMode(false)
  }

  const handleSummaryChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
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
        <Form layout='vertical' initialValues={formData}>
          <Form.Item name='summary' label={label}>
            <Input.TextArea
              name='summary'
              value={formData.summary}
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
          <Text>{userSummary.summary}</Text>
        </>
      )}
    </Card>
  )
}

export default SummaryCard
