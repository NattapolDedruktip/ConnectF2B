import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
        <MainNav />
      <div className='flex-1'>

        <Outlet />

      </div>
    </div>
  )
}

export default Layout