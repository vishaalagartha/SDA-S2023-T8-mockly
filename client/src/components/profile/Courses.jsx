import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, removeCourse } from '../../store/userSlice'
import { getUserCourses } from '../../store/userSelector'
import { Card, Tag, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { addCourseAPI, deleteCourseAPI } from '../../api/userProfile'

const CoursesCard = () => {
  const dispatch = useDispatch()

  const courses = useSelector(getUserCourses)
  const [newCourse, setNewCourse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewCourseChange = (event) => {
    setNewCourse(event.target.value)
  }

  const handleAddCourseClick = async () => {
    if (newCourse !== '') {
      setLoading(true)
      try {
        const res = await addCourseAPI({ courseName: newCourse })
        console.log('Added new course', res)
        dispatch(addCourse(res))
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
      setNewCourse('')
    }
  }

  const handleRemoveCourseClick = async (courseToRemove) => {
    setLoading(true)
    try {
      const res = await deleteCourseAPI({ courseId: courseToRemove })
      console.log(res.message)
      if (!res.status) {
        dispatch(removeCourse({ courseId: courseToRemove }))
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const renderCourses = () => {
    return courses.map((course) => (
      <Tag
        className='user-course-tag'
        closable
        key={course._id}
        onClose={() => handleRemoveCourseClick(course._id)}
      >
        {course.title}
      </Tag>
    ))
  }

  return (
    <Card className='user-profile-card' title='Courses' loading={loading}>
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
