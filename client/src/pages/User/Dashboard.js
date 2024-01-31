import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Outlet } from 'react-router-dom'
import UserMenu from '../../components/Layout/UserMenu'

function Dashboard() {
  return (
    <Layout title={"Dashboard"}>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <UserMenu />
        <div className='p-4'>
          <div className='bg-teal-200'>This is Admin Dashboard</div>
          <div><Outlet /></div>

        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
