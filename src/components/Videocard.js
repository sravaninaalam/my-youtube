import React from 'react'
import { useSelector } from 'react-redux'
import{countViews,timeDifference} from '../utils/helper' 
const Videocard = ({data}) => {

    const{snippet}=data
     const{publishedAt,channelTitle,thumbnails,title}=snippet
     const viewCount=data?.statistics?.viewCount
     const published=new Date(publishedAt)
    const toggle=useSelector(store=>store.sidebar.isMenuOpen)
  return (
    <>
        <div className={toggle ?'w-[360px] shadow-sm my-3' :'w-[400px] shadow-sm pl-5 m-2'}>
            <img alt='video' src={thumbnails?.medium?.url} className='rounded-md'/>
            <h3 className='font-bold'>{title}</h3>
            <h3>{channelTitle}</h3>
            <h4>{countViews(viewCount)}-views   {timeDifference(published)}</h4>
        </div>
    </>
  )
}

export default Videocard
