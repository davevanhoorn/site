import React, { FunctionComponent } from "react"
import "normalize.css"

import "../../assets/css/global.css"
import "../../assets/css/fonts.css"

import Navigation from "../navigation/navigation"

const Wrapper: FunctionComponent = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
)

export default Wrapper
