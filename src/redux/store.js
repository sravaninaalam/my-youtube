import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import sidebarSlice from './sidebarSlice'
import chatSlice from './chatSlice'
const store=configureStore({
    reducer:{
        search:searchSlice,
        sidebar:sidebarSlice,
        livechat:chatSlice
    }
})
export default store