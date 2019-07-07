import React from "react"
import { Link } from "gatsby"

const Logo = () => (
  <Link to="/">
    <h6 className="text-xl text-gray-800 leading-none font-semibold">
      Dave van Hoorn
    </h6>
    <span className="text-xs text-gray-500 font-semibold">
      Front-End Developer @ Capgemini
    </span>
  </Link>
)

export default Logo
