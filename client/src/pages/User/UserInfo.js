import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/auth'

function UserInfo() {
  const [auth, setAuth] = useAuth()

  return (
    <Layout>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <UserMenu />
        <div className='p-4'>
        <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Name</div>
                                <div class="px-4 py-2">{auth.user.name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Role</div>
                                <div class="px-4 py-2">{auth.user.role === 0 ? 'User' : 'Admin'}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Address</div>
                                <div class="px-4 py-2">{auth.user.address}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{auth.user.phone}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Link Facebook</div>
                                <div class="px-4 py-2">Coming Soon</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Link Instagram</div>
                                <div class="px-4 py-2">Coming Soon</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">{auth.user.email}</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    >
                      Chỉnh sửa thông tin 
                    </button>
                </div>
          <div><Outlet /></div>

        </div>
      </div>
    </Layout>
  )
}

export default UserInfo
