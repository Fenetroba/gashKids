import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayer = () => {
  return (
    <div>
      <Outlet/>
      </div>
  )
}

export default AuthLayer