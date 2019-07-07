import React from "react"
import Header from "../components/header/header"

export default ({ children }) => (
  <div className="container max-w-2xl">
    <Header />
    {children}
  </div>
)
