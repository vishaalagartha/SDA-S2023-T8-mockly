import { Modal,  Slider, Input } from "antd"
import {  useSelector } from 'react-redux'
//  import dayjs from 'dayjs'
import { feedbackSelector } from "../../store/feedbackSlice"

const { TextArea } = Input;
// eslint-disable-next-line no-unused-vars
const FeedbackForm = ({ open, setOpen,selectedFeedbackForm }) => {
  const feedback = useSelector(feedbackSelector)
  console.log("FEEDBACK: ",feedback)
  // eslint-disable-next-line no-unused-vars
  return (
    <Modal 
      open={open}
      onCancel={() => setOpen(false)}
      width={1000}>
      {feedback && Object.keys(feedback.questions).map((key)=>{
        const currQuestion = feedback.questions[key];
        console.log(currQuestion)
        const questionType = currQuestion.type;
        switch(questionType){
          case "text":
            
            return(
              <div key={`question-${key}`}>
                <p>{currQuestion.question}</p>
                <TextArea rows={4} />
              </div>
            )
            //  eslint-disable-next-line no-unreachable
            break;
          case "1-5":
            return(
              <div key={`question-${key}`}>
                <p>{currQuestion.question}</p>
                <Slider step={20} marks={{0:0, 20:1, 40:2, 60:3, 80:4, 100:5}} defaultValue={3} />
              </div>
            )
            //  eslint-disable-next-line no-unreachable
            break
          default:
            //  eslint-disable-next-line no-unreachable
            break;
        }
        
        
      })}
    </Modal>
  )
}

export default FeedbackForm
