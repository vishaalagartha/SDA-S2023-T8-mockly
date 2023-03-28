import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackRow from '../components/FeedbackHistory/FeedbackRow'
//  import { Row, Col } from 'antd'
//  import { fetchUserAPI } from '../api/userProfile'
import { setFeedbackHistory, feedbackHistorySelector} from '../store/feedbackHistorySlice'


const FeedbackHistoryPage = () => {
  const dispatch = useDispatch()
  const feedbackHistory= useSelector(feedbackHistorySelector)
  useEffect(() => {
    
    const getFeedbackHistory = async () => {
      try {
        /*
        const response = await fetchUserAPI()
        
        console.log('Profile Page', response)
        */
        //  this will be replaced with fetching the feedback you get
        //  This uses dummy data for now 
        const response = [{
          time: "2019-01-25",
          reviewer: "userA",
          answers:{}
        },
      {
          time: "2019-01-26",
          reviewer: "userB",
          answers:{}
        },
      {
          time: "2019-01-27",
          reviewer: "userC",
          answers:{}
        }]
        console.log("done");
        dispatch(setFeedbackHistory(response))
      } catch (error) {
        console.error(error)
      }
    }
    getFeedbackHistory()
    
  }, [dispatch])
  return (
    <div >
      {feedbackHistory.map((each)=>{
        return <FeedbackRow 
          key={`${each.reviewer}-${each.time}`}
          time={each.time}
          answers={each.answers}
          reviewer={each.reviewer}
        />
      })}
    </div>
  )
}

export default FeedbackHistoryPage
