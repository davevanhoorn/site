import React from "react"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default ({ children }) => {
  return (
    <div className="container max-w-xl">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
