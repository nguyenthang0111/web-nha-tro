import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'


function HomePage() {
  const [auth, setAuth] = useAuth();
  const [page, setPage] = useState(1);

  return (
    <Layout>
      {/* Banner */}
      <div className=''>
        
      </div>
    </Layout>
  )
}

export default HomePage
