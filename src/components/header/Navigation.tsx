import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props: any) => {
  // Create navigation menu items
  let navigationMenu = [
    {
      title: "Home",
      path: "/",
      class: ""
    },
    {
      title: "Blog",
      path: "/blog",
      class: ""
    },
    {
      title: "About",
      path: "/about",
      class: ""
    },
    {
      title: "Contact",
      path: "/contact",
      class: ""
    }
  ];

  // Add class name "navigation__link" to each item in the object
  navigationMenu.map(item =>
    Object.assign(item, { class: "navigation__link" })
  );

  console.log(props.location);

  return (
    <div>
      <button className="sm:hidden bg-transparent hover:bg-gray-800 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
        Menu
      </button>
      <div className="hidden sm:block">
        <nav>
          {navigationMenu.map(item => (
            <Link
              className={`${item.class} ${item.class +
                (props.location === item.path ? "--active" : "")}`}
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
  );
};

export default Navigation;
