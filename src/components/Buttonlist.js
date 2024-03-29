import {useState } from 'react'
import {Link} from 'react-router-dom'
import { Search_By_Keyword } from '../utils/consts'
import Searchcard from './Searchcard'
import Shimmer from './Shimmer'
function Buttonslist(){
    const btn_list=["All","Gaming","Live","React Js","Akshay Saini","Music","Cricket","Mix","Songs","Cooking","Mahishivan"]
    const[videos,setVideos]=useState([])

    async function getResults(keyword){
        const data=await fetch(Search_By_Keyword+keyword)
        const json=await data.json()
        setVideos(json.items)
    }
    return !videos?<Shimmer/>:(
        <>
        <div className="flex">
            {btn_list.map((btn,index)=><Link to={'/search?search_query='+btn} key={index}>
            <button  onClick={()=>getResults(btn)}
             className="py-2 my-3 px-5 hover:bg-black hover:text-white  bg-slate-300 mx-2 rounded-lg">
             {btn}</button></Link>)}
             
        </div>
        {videos.map(video=> (<Link key={video.id?.videoId} to={'/watch?v='+video?.id?.videoId}><Searchcard videos={video}/> </Link>))}
        </>
    )
}

export default Buttonslist