import React from 'react'
import MainFrame from './components/MainFrame'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Watchpage from './components/Watchpage'
import Searchpage from './components/Searchpage'
import Shortspage from './components/Shortspage'
import Bodycontainer from './components/Bodycontainer'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<MainFrame/>,
    children:[
      {
        path:'/watch',
        element:<Watchpage/>
      },{
        path:'/',
        element:<Bodycontainer/>
      },{
        path:'/search',
        element:<Searchpage/>
     },{
      path:'/shorts',
      element:<Shortspage/>
     }
    ]
  }
])
const App = () => {
  return (
    <>
      <div>
     <RouterProvider router={appRouter}/>
      </div>
    </>
  )
}

export default App
