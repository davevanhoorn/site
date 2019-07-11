import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"

export default ({ children }) => {
  return (
    <div className="container max-w-2xl">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
