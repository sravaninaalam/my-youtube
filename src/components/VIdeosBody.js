import React, { useEffect, useState } from 'react'
import { Youtube_Video_Api } from '../utils/consts'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'
import Buttonslist from './Buttonlist'
import Shimmer from './Shimmer'

const VIdeosBody = () => {
    const[videosdata,setVideosData]=useState([])
    useEffect(()=>{
        getResults()
    },[])
    async function getResults(){
        const data=await fetch(Youtube_Video_Api)
        const json=await data.json()
        setVideosData(json?.items)
        // console.log(json?.items)
    }
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
