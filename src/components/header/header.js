import React from "react"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-4 mb-10">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
