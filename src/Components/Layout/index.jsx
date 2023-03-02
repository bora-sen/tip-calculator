import React from 'react'
import logo from './logo.svg'

function Layout({children}) {
  return (
    <main className='bg-primary-cyan-gray-light w-full h-screen md:flex md:flex-col md:items-center md:justify-center'>
      <img className='mb-24 mx-auto pt-24 md:pt-0' src={logo} alt="" />
        {children}
    </main>
  )
}

export default Layout