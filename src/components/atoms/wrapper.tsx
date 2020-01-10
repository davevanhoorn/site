import React, { FunctionComponent } from "react"
import "normalize.css"

import "../../assets/css/global.css"
import "../../assets/css/fonts.css"

import Header from "../header/header"
import Footer from "../footer/footer"

const Wrapper: FunctionComponent = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Wrapper
