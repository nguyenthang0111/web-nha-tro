import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { Outlet } from 'react-router-dom'

function UserRoom() {
  return (
    <Layout title="Phòng trọ đã đăng">
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <UserMenu />
        <div className='p-4'>
          <div className='bg-teal-200'>Phòng trọ đã đăng</div>
          <div><Outlet /></div>

        </div>
      </div>
    </Layout>
  )
}

export default UserRoom
