import React from 'react'
import './Header.css'
import List from './list/List'
import HeaderPage from './headermain/HeaderPage'

const Header = () => {
  return (
    <header>
      <List />
      <HeaderPage/>
    </header>
  )
}

export default Header