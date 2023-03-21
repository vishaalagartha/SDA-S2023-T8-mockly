import React, { useState } from 'react'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const CoursesCard = () => {
  const [courses, setCourses] = useState([])
  const [newCourse, setNewCourse] = useState('')

  const handleNewCourseChange = (event) => {
    setNewCourse(event.target.value)
  }

  const handleAddCourseClick = () => {
    if (newCourse !== '') {
      setCourses([...courses, newCourse])
      setNewCourse('')
    }
  }

  const handleRemoveCourseClick = (skillToRemove) => {
    setCourses(courses.filter((skill) => skill !== skillToRemove))
  }

  const renderCourses = () => {
    return courses.map((skill) => (
      <Tag
        className='user-skill-tag'
        closable
        key={skill}
        onClose={() => handleRemoveCourseClick(skill)}
      >
        {skill}
      </Tag>
    ))
  }

  return (
    <Card className='user-profile-card' title='Courses'>
      {renderCourses()}
      <div className='user-skill-actions-div'>
        <Input
          value={newCourse}
          onChange={handleNewCourseChange}
          placeholder='Add skill'
        />
        <Button
          className='user-add-skill-btn'
          type='primary'
          onClick={handleAddCourseClick}
          icon={<PlusOutlined />}
        />
      </div>
    </Card>
  )
}

export default CoursesCard
