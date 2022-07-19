import React from 'react'
import NavBar from './NavBar';

const Layout = ({children}) => {
  return (
    <div className=''>
      <NavBar />
      <div className=''>{children}</div>
    </div>
  )
}

export default Layout