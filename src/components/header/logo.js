import { Link } from "gatsby"
import React from "react"

const Logo = () => (
  <Link to="/">
    <h6 className="text-xl text-gray-900 leading-none font-semibold">
      Dave van Hoorn
    </h6>
    <span className="text-xs text-gray-700 font-semibold">
      Front-End Developer
    </span>
  </Link>
)

export default Logo
