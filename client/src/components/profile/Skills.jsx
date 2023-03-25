import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, removeSkill } from '../../store/userSlice'
import { getUserSkills } from '../../store/userSelector'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { addSkillAPI, deleteSkillAPI } from '../../api/userProfile'

const SkillsCard = () => {
  const dispatch = useDispatch()

  const skills = useSelector(getUserSkills)
  const [newSkill, setNewSkill] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value)
  }

  const handleAddSkillClick = async () => {
    if (newSkill !== '') {
      setLoading(true)
      try {
        const res = await addSkillAPI({ skillName: newSkill })
        console.log('Added new skills', res)
        if (!res.status) {
          dispatch(addSkill(res))
        }
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
      setNewSkill('')
    }
  }

  const handleRemoveSkillClick = async (skillToRemove) => {
    setLoading(true)
    try {
      const res = await deleteSkillAPI({ skillId: skillToRemove })
      console.log(res.message)
      if (!res.status) {
        dispatch(removeSkill({ skillId: skillToRemove }))
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const renderSkills = () => {
    return skills.map((skill) => (
      <Tag
        className='user-skill-tag'
        closable
        key={skill._id}
        onClose={() => handleRemoveSkillClick(skill._id)}
      >
        {skill.title}
      </Tag>
    ))
  }

  return (
    <Card className='user-profile-card' title='Skills' loading={loading}>
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
