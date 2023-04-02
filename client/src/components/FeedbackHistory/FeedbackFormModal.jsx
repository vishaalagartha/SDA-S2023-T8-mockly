import { Modal, Slider, Input } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFeedbackQuestions,
  feedbackSelector,
} from '../../store/feedbackSlice'
// eslint-disable-next-line no-unused-vars
const { TextArea } = Input
// eslint-disable-next-line no-unused-vars
const FeedbackFormModal = ({ open, setOpen, selectedFeedbackForm }) => {
  const feedback = useSelector(feedbackSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    const getFeedback = async () => {
      try {
        /*
        const response = await fetchUserAPI()
        
        console.log('Profile Page', response)
        */
        //  this will be replaced with fetching the questions
        //  This uses dummy data for now
        const response = {
          time: '2019-01-25',
          reviewee: 'userA',
          questions: {
            B1: {
              question: 'How would you rate this interview experience?',
              type: '1-5',
            },
            B2: { question: 'Any additional comments?', type: 'text' },
            L1: {
              question:
                "I'm a foreigner and my english skills aren't too good. Did you understand what I was saying?",
              type: '1-5',
            },
            L2: {
              question: 'Any additional feedback on my speech?',
              type: 'text',
            },
            T1: {
              question: 'Were my technical questions too easy or too difficult',
              type: '1-5',
            },
            T2: {
              question: 'Any additional feedback on my technical questions?',
              type: 'text',
            },
            P1: { question: 'Was the interview too lax?', type: '1-5' },
            P2: { question: 'Was the interview too formal?', type: '1-5' },
            P3: {
              question: 'Any additional feedback on my professionalism?',
              type: 'text',
            },
          },
        }

        console.log('done')
        dispatch(setFeedbackQuestions(response))
      } catch (error) {
        console.error(error)
      }
    }
    getFeedback()
  }, [dispatch])
  return (
    <Modal open={open} onCancel={() => setOpen(false)} width={1000}>
      {open &&
        feedback &&
        Object.keys(feedback.questions).map((key) => {
          const currQuestion = feedback.questions[key]
          console.log(currQuestion)
          const questionType = currQuestion.type
          switch (questionType) {
            case 'text':
              return (
                <div key={`question-${key}`}>
                  <p>{currQuestion.question}</p>
                  <TextArea rows={4} />
                </div>
              )
              //  eslint-disable-next-line no-unreachable
              break
            case '1-5':
              return (
                <div key={`question-${key}`}>
                  <p>{currQuestion.question}</p>
                  <Slider
                    step={20}
                    marks={{ 0: 0, 20: 1, 40: 2, 60: 3, 80: 4, 100: 5 }}
                    defaultValue={3}
                  />
                </div>
              )
              //  eslint-disable-next-line no-unreachable
              break
            default:
              //  eslint-disable-next-line no-unreachable
              break
          }
        })}
    </Modal>
  )
}

export default FeedbackFormModal
