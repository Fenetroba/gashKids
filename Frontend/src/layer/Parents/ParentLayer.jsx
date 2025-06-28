import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentLayer = () => {
  return (
    <div>
     <Outlet/>

    </div>
  )
}

export default ParentLayer