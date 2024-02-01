import React, { useEffect, useState } from 'react'
import { Hamburger_Icon, User_Icon, Youtube_Icon, Youtube_Suggestions_CORS } from '../utils/consts'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { cacheResults } from '../redux/searchSlice'
import { Mic, Bell, Search} from 'lucide-react';
import { toggleMenu } from '../redux/sidebarSlice'
const Header = () => {
    const[searchtext,setSearchText]=useState('')
   const[suggestions,setSuggestions]=useState([])
   const[showsuggestions,setShowSuggestions]=useState(false)
   const [closebutton,setClosebutton]=useState()
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
  return (
   <>
        <div className='grid grid-flow-col shadow-lg items-center'>
            <div className='flex col-span-1'>
                <img src={Hamburger_Icon} alt='toggler' className='w-14 h-14 m-3  p-2 cursor-pointer'
                onClick={()=>dispatch(toggleMenu())}/>
                <img src={Youtube_Icon} alt='logo' className='w-14 m-3'/>
            </div>
            <div className='col-span-10 ml-16'>
            <form onSubmit={(e)=>e.preventDefault()} className='flex'>
                
                <input type='text' placeholder='search' className='my-4 py-2 px-1 w-2/3 border ml-5 border-gray-500 rounded-l-full focus:outline-none'
                value={searchtext}  onChange={(e)=>setSearchText(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                />
                {searchtext&& <span className='my-5 bg-gray-100 font-bold' onClick={()=>setSearchText('')}>X</span>}
              <Link to={'/search?search_query='+searchtext}><button className='my-4  bg-gray-100 py-2 px-5  border border-gray-500 rounded-r-full' type='submit' onClick={()=>setShowSuggestions(false)}>🔍</button>
              </Link>
             
              <Mic className='ml-5 my-6 bg-gray-200 rounded-full'/>
            </form>
                { showsuggestions&&
                    <div className='w-1/3 bg-white absolute'>
                        {suggestions.map((s,index)=> 
                           <Link to={'/search?search_query='+s}><h3 className='p-2 flex hover:bg-gray-50'key={index} onClick={()=>{setSearchText(s)
                            setShowSuggestions(false)}}><Search className='px-1'/>{s}</h3></Link>
                        )}
                    </div>
                }
            </div>
            <div className='col-span-1 m-2 flex'>
            <Bell className=' md:m-5'/>
                <img src={User_Icon} alt='usericon' className='w-8 h-8 my-3'/>
            </div>
        </div>
   </>
  )
}

export default Header
