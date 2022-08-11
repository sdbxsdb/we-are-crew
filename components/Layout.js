import React from 'react'
import NavBar from './NavBar';

const Layout = ({children}) => {
  return (
    <div className='min-h-[calc(100vh-96px)]'>
      <NavBar />
      <div className='mt-[96px]'>{children}</div>
    </div>
  )
}

export default Layout