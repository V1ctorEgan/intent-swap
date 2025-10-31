import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Rootlayout = () => {
  return (
    <div>
        {/* <Header/> */}
        <Outlet />
        
      
    </div>
  )
}

export default Rootlayout
