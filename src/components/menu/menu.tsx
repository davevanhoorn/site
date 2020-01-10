import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import styles from "./menu.module.css"

const Menu: FunctionComponent = () => {
  const menu = [
    { to: "/", title: "Blog" },
    { to: "/cv", title: "C.V." },
  ]
  return (
    <div className={styles.wrapper}>
      {menu.map((item, index) => (
        <Link to={item.to}>{item.title}</Link>
      ))}
    </div>
  )
}

export default Menu
