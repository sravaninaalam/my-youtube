import {useEffect,useState} from 'react'
import { cacheResults } from '../redux/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Youtube_Suggestions_CORS } from '../utils/consts'

function useCachedDeboncing(searchtext) {
  const[suggestions,setSuggestions]=useState([])
  const dispatch=useDispatch()
  const cacheddata=useSelector(store=>store.search)
  useEffect(()=>{
   const timer=setTimeout(()=>{
       if(cacheddata[searchtext]){
           setSuggestions(cacheddata[searchtext])
       }
       else{
           getSerachRes()}},500)
   
   return()=>clearTimeout(timer)

  },[searchtext])
  async function getSerachRes(){
     const data=await fetch(Youtube_Suggestions_CORS+searchtext)
     const json=await data.json()
   setSuggestions(json[1])
   dispatch(cacheResults({[searchtext]:json[1]}))
  }
  return suggestions
  
}

export default useCachedDeboncing
