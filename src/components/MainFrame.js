import React from 'react'
import Sidebar from './Sidebar'
import VIdeosBody from './VIdeosBody'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainFrame = () => {
  return (
    <>
    <Header/>
    <div className='flex'>
       <Sidebar/>
       <Outlet/>
    </div>
    </>
  )
}

export default MainFrame
