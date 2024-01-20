import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <Layout>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <AdminMenu />
        <div className='p-4'>
          <div className='bg-teal-200'>This is Admin Dashboard</div>
          <div><Outlet /></div>

        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
