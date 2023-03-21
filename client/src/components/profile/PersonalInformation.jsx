import { useState } from 'react'
import { map } from 'lodash'

import { Card, Button, Form, Input, Typography, Select } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalInformation } from '../../store/userSlice'
import { selectPersonalInformation } from '../../store/userSelector'

const { Paragraph } = Typography
const { Option } = Select

const PersonalInformationCard = () => {
  const pronounsOptions = {
    '': 'Select Pronoun',
    he: 'He/Him',
    she: 'She/Her',
    they: 'They/Them',
  }

  const genderOptions = {
    '': 'Select Gender',
    male: 'Male',
    female: 'Female',
    nonbinary: 'Non-binary',
  }

  const ethnicityOptions = {
    '': 'Select Ethnicity',
    asian: 'Asian',
    black: 'Black',
    hispanic_latino: 'Hispanic or Latino',
    native_american_alaska_native: 'Native American or Alaska Native',
    white: 'White',
    other: 'Other',
  }

  const dispatch = useDispatch()

  // value is set when click on edit icon on top-right of card.
  const [editMode, setEditMode] = useState(false)

  const user = useSelector(selectPersonalInformation)

  // used to save the form's state
  const [formData, setFormData] = useState({
    email: user.email,
    phoneNumber: user.phoneNumber,
    pronouns: user.pronouns,
    gender: user.gender,
    ethnicity: user.ethnicity,
  })

  // toggles edit mode value on edit icon click and reset the forms state back to original state
  const handleEditClick = () => {
    setFormData({
      email: user.email,
      phoneNumber: user.phoneNumber,
      pronouns: user.pronouns,
      gender: user.gender,
      ethnicity: user.ethnicity,
    })
    setEditMode((prevEditMode) => !prevEditMode)
  }

  // dispatches action to save personal information and sets edit mode to false
  const handleSaveClick = () => {
    dispatch(setPersonalInformation(formData))
    setEditMode(false)
  }

  // resets the form's state back to original state and sets edit mode to false
  const handleCancelClick = () => {
    setFormData({
      email: user.email,
      phoneNumber: user.phoneNumber,
      pronouns: user.pronouns,
      gender: user.gender,
      ethnicity: user.ethnicity,
    })
    setEditMode(false)
  }

  // updates the formData state on any input change
  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  // updates the formData state on any select dropdown state
  const handleSelectChange = (value, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
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
        <Form
          layout='vertical'
          onFinish={handleSaveClick}
          initialValues={formData}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid email address',
              },
              {
                required: true,
                message: 'Email is required',
              },
            ]}
            hasFeedback
          >
            <Input
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name='phoneNumber'
            label='Phone Number'
            rules={[
              {
                required: true,
                message: 'Phone number is required',
              },
              {
                pattern: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            ]}
            hasFeedback
          >
            <Input
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label='Pronouns'>
            <Select
              defaultValue=''
              value={formData.pronouns}
              onChange={(value) => handleSelectChange(value, 'pronouns')}
            >
              {map(pronounsOptions, (label, value) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='Gender'>
            <Select
              defaultValue=''
              value={formData.gender}
              onChange={(value) => handleSelectChange(value, 'gender')}
            >
              {map(genderOptions, (label, value) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='Ethnicity'>
            <Select
              placeholder='Select ethnicity'
              defaultValue=''
              value={formData.ethnicity}
              onChange={(value) => handleSelectChange(value, 'ethnicity')}
              style={{ width: '100%' }}
            >
              {map(ethnicityOptions, (label, value) => (
                <Option key={value} value={value}>
                  {label}
                </Option>
              ))}
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
                htmlType='submit'
              >
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      ) : (
        <>
          <Paragraph>{`Email Address: ${user.email}`}</Paragraph>
          <Paragraph>{`Phone Number: ${user.phoneNumber}`}</Paragraph>
          <Paragraph>{`Pronouns: ${
            user.pronouns === '' ? '' : pronounsOptions[user.pronouns]
          }`}</Paragraph>
          <Paragraph>{`Gender: ${
            user.gender === '' ? '' : genderOptions[user.gender]
          }`}</Paragraph>
          <Paragraph>{`Ethnicity: ${
            user.ethnicity === '' ? '' : ethnicityOptions[user.ethnicity]
          }`}</Paragraph>
        </>
      )}
    </Card>
  )
}

export default PersonalInformationCard
