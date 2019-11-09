import React from "react"

import Newsletter from "../newsletter/newsletter"

const Footer = () => (
  <footer className="pt-10 pb-6 text-xs text-gray-700 bg-gray-200">
    <Newsletter />
    <div className="text-center">
      <span className="ml-1 block" role="img" aria-label="Heart">
        ❤️
      </span>
      ©opy whatever you want
    </div>
  </footer>
)

export default Footer
