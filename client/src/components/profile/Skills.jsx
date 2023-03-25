import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, removeSkill } from '../../store/userSlice'
import { getUserSkills } from '../../store/userSelector'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const SkillsCard = () => {
  const dispatch = useDispatch()

  const skills = useSelector(getUserSkills)
  const [newSkill, setNewSkill] = useState('')

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value)
  }

  const handleAddSkillClick = () => {
    if (newSkill !== '') {
      // TODO: use uuid instead
      const newSkillObj = {
        id: Math.floor(Math.random() * 1001),
        text: newSkill,
      }
      dispatch(addSkill(newSkillObj))
      setNewSkill('')
    }
  }

  const handleRemoveSkillClick = (skillToRemove) => {
    dispatch(removeSkill({ id: skillToRemove }))
  }

  const renderSkills = () => {
    return skills.map((skill) => (
      <Tag
        className='user-skill-tag'
        closable
        key={skill.id}
        onClose={() => handleRemoveSkillClick(skill.id)}
      >
        {skill.text}
      </Tag>
    ))
  }

  return (
    <Card className='user-profile-card' title='Skills'>
      {renderSkills()}
      <div className='user-skill-actions-div'>
        <Input
          value={newSkill}
          onChange={handleNewSkillChange}
          placeholder='Add skill'
        />
        <Button
          className='user-add-skill-btn'
          type='primary'
          onClick={handleAddSkillClick}
          icon={<PlusOutlined />}
        />
      </div>
    </Card>
  )
}

export default SkillsCard
