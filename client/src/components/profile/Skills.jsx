import React, { useState } from 'react'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const SkillsCard = () => {
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState('')

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value)
  }

  const handleAddSkillClick = () => {
    if (newSkill !== '') {
      setSkills([...skills, newSkill])
      setNewSkill('')
    }
  }

  const handleRemoveSkillClick = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const renderSkills = () => {
    return skills.map((skill) => (
      <Tag
        className='user-skill-tag'
        closable
        key={skill}
        onClose={() => handleRemoveSkillClick(skill)}
      >
        {skill}
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
