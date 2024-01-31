import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { Outlet } from 'react-router-dom'

function UserInfo() {
  return (
    <Layout>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <UserMenu />
        <div className='p-4'>
          <div className='bg-teal-200'>Thong tin nguoi dung</div>
          <div><Outlet /></div>

        </div>
      </div>
    </Layout>
  )
}

export default UserInfo
