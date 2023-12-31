import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Toaster } from 'react-hot-toast';

function Layout({ children }) {
  return (
    <div>
      <Header/>
      <main style={{ minHeight: "80vh"}}>
        <Toaster 
          position='top-right'
        />
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
