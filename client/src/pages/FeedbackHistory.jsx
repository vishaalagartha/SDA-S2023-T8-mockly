import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackRow from '../components/FeedbackHistory/FeedbackRow'
//  import { Row, Col } from 'antd'
//  import { fetchUserAPI } from '../api/userProfile'
import { setFeedbackHistory, feedbackHistorySelector} from '../store/feedbackHistorySlice'
import FeedbackModal from '../components/FeedbackHistory/FeedbackModal'

const FeedbackHistoryPage = () => {
  const dispatch = useDispatch()
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [selectedFeedback, setSelectedFeedback] = useState(0)
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
          questions:{
            B1:{"question":"How would you rate this interview experience?","type":"1-5"},
            B2:{"question":"Any additional comments?","type":"text"},
            L1:{"question":"I'm a foreigner and my english skills aren't too good. Did you understand what I was saying?","type":"1-5"},
            L2:{"question":"Any additional feedback on my speech?","type":"text"},
            T1:{"question":"Were my technical questions too easy or too difficult","type":"1-5"},
            T2:{"question":"Any additional feedback on my technical questions?","type":"text"},
            P1:{"question":"Was the interview too lax?","type":"1-5"},
            P2:{"question":"Was the interview too formal?","type":"1-5"},
            P3:{"question":"Any additional feedback on my professionalism?","type":"text"}},
          answers:{
            B1: "5",
            B2: "N/A",
            L1: "3",
            L2: "N/A",
            T1: "2",
            P1: "1",
            P2: "2",
            P3: "N/A"

          }
        },
      {
          time: "2019-01-26",
          reviewer: "userB",
          questions:{
            B1:{"question":"How would you rate this interview experience?","type":"1-5"},
            B2:{"question":"Any additional comments?","type":"text"},
            P1:{"question":"Was the interview too lax?","type":"1-5"},
            P2:{"question":"Was the interview too formal?","type":"1-5"},
            P3:{"question":"Any additional feedback on my professionalism?","type":"text"},
          },
          answers:{
            B1: "5",
            B2: "N/A",
            P1: "1",
            P2: "1",
            P3: "GREAT intervieweer"
          }
        },
      {
          time: "2019-01-27",
          reviewer: "userC",
          questions:{
            B1:{"question":"How would you rate this interview experience?","type":"1-5"},
            B2:{"question":"Any additional comments?","type":"text"},
          },
          answers:{

          }
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
      {feedbackHistory.map((each,index)=>{
        return <FeedbackRow 
          key={`${each.reviewer}-${each.time}`}
          time={each.time}
          answers={each.answers}
          reviewer={each.reviewer}
          setSelectedFeedback={setSelectedFeedback}
          setOpenFeedbackModal={setOpenFeedbackModal}
          index={index}
        />
      })}
      <FeedbackModal  open={openFeedbackModal} setOpen={setOpenFeedbackModal} selectedFeedback={selectedFeedback}/>
      
    </div>
    
  )
}

export default FeedbackHistoryPage
