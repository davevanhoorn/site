import { Link } from "gatsby"
import React from "react"

const Navigation = props => {
  // Create navigation menu items
  let navigationMenu = [
    {
      title: "Blog",
      path: "/",
      class: "navigation__link",
    },
    // {
    //   title: "Projects",
    //   path: "/projects",
    //   class: "",
    // },
    {
      title: "CV",
      path: "/cv",
      class: "navigation__link",
    },
    {
      title: "About",
      path: "/about",
      class: "navigation__link",
    },
  ]

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
