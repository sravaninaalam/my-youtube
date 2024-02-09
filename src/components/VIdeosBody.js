import Videocard from './Videocard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import useVideos from '../customhooks/useVideos'

const VIdeosBody = () => {
   const videosdata=useVideos()
    if (!videosdata) return <Shimmer/>
  return (
    <>   
        <div className='flex flex-wrap'>
            {videosdata.map(video=><Link key={video.id} to={'/watch?v='+video?.id}><Videocard key={video?.id} data={video}/></Link>)}
            
        </div>
   
    </>
  )
}

export default VIdeosBody
