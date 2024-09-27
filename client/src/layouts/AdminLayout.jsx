import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from "../components/admin/AdminHeader"
import AdminSidebar from "../components/admin/AdminSidebar"

function AdminLayout() {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
      <AdminSidebar />


      <div className='flex flex-col flex-1'>
        <AdminHeader />
        <div className='flex-1 p2 min-h-0 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout