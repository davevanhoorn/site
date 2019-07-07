import React from "react"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = props => {
  return (
    <header className="flex justify-between items-center pt-4">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
