import React from "react"
import { Link } from "gatsby"

const Navigation = props => {
  // Create navigation menu items
  let navigationMenu = [
    {
      title: "Blog",
      path: "/",
      class: "",
    },
    {
      title: "Contact",
      path: "/contact/",
      class: "",
    },
  ]

  // Add class name "navigation__link" to each item in the object
  navigationMenu.map(item => Object.assign(item, { class: "navigation__link" }))

  return (
    <div>
      <button className="sm:hidden bg-transparent hover:bg-gray-800 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
        Menu
      </button>
      <div className="hidden sm:block">
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
      </div>
    </div>
  )
}

export default Navigation
