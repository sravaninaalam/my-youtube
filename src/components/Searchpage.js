import {useSearchParams,Link} from 'react-router-dom'
import Shimmer from './Shimmer'
import Searchcard from './Searchcard'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/sidebarSlice'
import Buttonslist from './Buttonlist'
import useSearchedVideos from '../customhooks/useSearchedVideos'
const Searchpage = () => {
  const [params]=useSearchParams()
  const searchedtext =params.get("search_query")
  const dispatch=useDispatch()
  dispatch(toggleMenu())
 const videos=useSearchedVideos(searchedtext)
  return !videos?<Shimmer/>:(
    <div className='flex flex-col'>
    <Buttonslist/>
    <div className='flex flex-wrap'>
        {/* {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Video videos={video}/> </Link>))} */}
          {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Searchcard videos={video}/> </Link>))}
     
    </div>
    </div>
  )
}

export default Searchpage
