import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, removeCourse } from '../../store/userSlice'
import { selectCourses } from '../../store/userSelector'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const CoursesCard = () => {
  const dispatch = useDispatch()

  const courses = useSelector(selectCourses)
  const [newCourse, setNewCourse] = useState('')

  const handleNewCourseChange = (event) => {
    setNewCourse(event.target.value)
  }

  const handleAddCourseClick = () => {
    if (newCourse !== '') {
      const newCourseObj = {
        // TODO: use uuid instead
        id: Math.floor(Math.random() * 1001),
        text: newCourse,
      }
      dispatch(addCourse(newCourseObj))
      setNewCourse('')
    }
  }

  const handleRemoveCourseClick = (courseToRemove) => {
    dispatch(removeCourse({ id: courseToRemove }))
  }

  const renderCourses = () => {
    return courses.map((course) => (
      <Tag
        className='user-course-tag'
        closable
        key={course.id}
        onClose={() => handleRemoveCourseClick(course.id)}
      >
        {course.text}
      </Tag>
    ))
  }

  return (
    <Card className='user-profile-card' title='Courses'>
      {renderCourses()}
      <div className='user-course-actions-div'>
        <Input
          value={newCourse}
          onChange={handleNewCourseChange}
          placeholder='Add course'
        />
        <Button
          className='user-add-course-btn'
          type='primary'
          onClick={handleAddCourseClick}
          icon={<PlusOutlined />}
        />
      </div>
    </Card>
  )
}

export default CoursesCard
