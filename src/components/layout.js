import React from "react"
import Header from "../components/header/header"

export default ({ children }) => (
  <div className="container max-w-xl">
    <Header />
    {children}
  </div>
)
