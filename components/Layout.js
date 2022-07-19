import React from 'react'
import NavBar from './NavBar';

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <div className=''>{children}</div>
    </div>
  )
}

export default Layout