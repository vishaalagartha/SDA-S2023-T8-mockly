import React, { useState } from 'react'
import { Card, Avatar, Typography, Form, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIdentity } from '../../store/userSelector'
import { setIdentity } from '../../store/userSlice'
import { updatePersonalIdentityAPI } from '../../api/userProfile'

const { Title } = Typography

const IdentityCard = () => {
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(false)

  const userIdentity = useSelector(getUserIdentity)

  const [formData, setFormData] = useState({
    firstName: userIdentity.firstName,
    lastName: userIdentity.lastName,
    organization: userIdentity.organization,
    position: userIdentity.position,
  })

  const handleEditClick = () => {
    setFormData({
      firstName: userIdentity.firstName,
      lastName: userIdentity.lastName,
      organization: userIdentity.organization,
      position: userIdentity.position,
    })
    setEditMode((prevEditMode) => !prevEditMode)
  }

  const handleSaveClick = async () => {
    setLoading(true)
    try {
      const res = await updatePersonalIdentityAPI({ userId: '', ...formData })
      console.log('Personal Identity added: ', res)
      if (res.status === 200) {
        dispatch(setIdentity(formData))
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setFormData({
      firstName: userIdentity.firstName,
      lastName: userIdentity.lastName,
      organization: userIdentity.organization,
      position: userIdentity.position,
    })
    setEditMode(false)
  }

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card
      className='user-profile-card'
      title='Identity'
      loading={loading}
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
          <Form
            layout='vertical'
            onFinish={handleSaveClick}
            initialValues={formData}
          >
            <Form.Item
              name='firstName'
              label='First Name'
              rules={[
                {
                  required: true,
                  message: 'First name is required',
                },
              ]}
              hasFeedback
            >
              <Input
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item name='lastName' label='Last Name'>
              <Input
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item name='organization' label='Organization'>
              <Input
                name='organization'
                value={formData.organization}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item name='position' label='Position/Degree Name'>
              <Input
                name='position'
                value={formData.position}
                onChange={handleInputChange}
              />
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
                  htmlType='submit'
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
            {`${userIdentity.firstName}  ${userIdentity.lastName}`}
          </Title>
          {userIdentity.organization && (
            <Title level={4} className='user-identity--organization'>
              {userIdentity.organization}
            </Title>
          )}
          {userIdentity.position && (
            <Title level={4} className='user-identity--position'>
              {userIdentity.position}
            </Title>
          )}
        </>
      )}
    </Card>
  )
}

export default IdentityCard
