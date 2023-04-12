import { useState } from 'react'
import './Header.css'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'

interface HeaderProps {
    loggedIn: boolean
}

function Header({ loggedIn } : HeaderProps) {

  return (
    <>
        loggedIn ? <LoggedInHeader /> : <LoggedOutHeader />
    </>
  )
}

export default Header;