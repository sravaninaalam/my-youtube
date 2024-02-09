import {useEffect,useState} from 'react'
import { Search_By_Keyword } from '../utils/consts'

function useSearchedVideos(searchedtext) {
    const[videos,setVideos]=useState([])
    useEffect(()=>{
        getSearchResult()
      },[searchedtext])
     
      async function getSearchResult(){
        const data=await fetch(Search_By_Keyword+searchedtext)
        const json=await data.json()
        setVideos(json.items)
      }
  return videos
}

export default useSearchedVideos
