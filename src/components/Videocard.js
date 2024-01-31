import React from 'react'
import { useSelector } from 'react-redux'

const Videocard = ({data}) => {
    
    const{snippet}=data
        const{channelTitle,title,thumbnails}=snippet
        const toggle=useSelector(store=>store.sidebar.isMenuOpen)
  return (
    <>
        <div className={toggle ?'w-[360px] shadow-sm my-3' :'w-[400px] shadow-sm pl-5 m-2'}>
            <img alt='video' src={thumbnails?.medium?.url} className='rounded-md'/>
            <h3>{channelTitle}</h3>
            <h3>{title}</h3>
        </div>
    </>
  )
}

export default Videocard
