import React from 'react'
import NavBar from './NavBar';

const Layout = ({children}) => {
  return (
    <div className=''>
      <NavBar />
      <div className='mt-[107px] md:mt-[76px]'>{children}</div>
    </div>
  )
}

export default Layout