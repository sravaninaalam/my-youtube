import {useEffect,useState} from 'react'
import { Youtube_Video_Api } from '../utils/consts'

function useVideos() {
    const[videosdata,setVideosData]=useState([])
    useEffect(()=>{
        getResults()
    },[])
    async function getResults(){
        const data=await fetch(Youtube_Video_Api)
        const json=await data.json()
        setVideosData(json?.items)
    }
  return  videosdata
}

export default useVideos
