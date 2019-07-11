import { Link } from "gatsby"
import React from "react"

const Navigation = props => {
  // Create navigation menu items
  let navigationMenu = [
    {
      title: "Blog",
      path: "/",
      class: "",
    },
  ]

  // Add class name "navigation__link" to each item in the object
  navigationMenu.map(item => Object.assign(item, { class: "navigation__link" }))

  return (
    <nav>
      {navigationMenu.map(item => (
        <Link
          className={`${item.class}`}
          activeClassName={`${item.class}--active`}
          to={item.path}
          title={item.title}
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
