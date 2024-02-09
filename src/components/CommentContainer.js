import Comment from "./Comment"
import Realcomments from "./Realcomments"
import {useSearchParams} from 'react-router-dom'
import useCommentsApi from "../customhooks/useCommentsApi"
import { commentsData } from "../utils/consts"




const CommentList=({comments})=>{
    
  return comments.map((comment,i)=><Comment key={i} data={comment} replies={comment.replies}/>)
}



const CommentContainer = () => {
  const [searchparams]=useSearchParams()
  const videoId=searchparams.get("v")
  const comments=useCommentsApi(videoId)
   if(!comments) return  <CommentList comments={commentsData}/>
  return (
   <>
      <div>
         <h1 className='font-bold'>Comments:</h1>
         {comments.map((cmnt)=> <Realcomments key={cmnt.id} commentInfo={cmnt}/>)}
      </div>
   </>
  )
}

export default CommentContainer
