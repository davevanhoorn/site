import React, { FunctionComponent, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { TSiteMetaData } from "../atoms/seoTypes"
import styles from "./navigation.module.css"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

type TStaticQueryProfilePicture = {
  profilePicture: any
}

const Navigation: FunctionComponent = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false)

  const data: TStaticQuerySite &
    TStaticQueryProfilePicture = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "dave.jpg" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const menu = [
    { to: "/", title: "Blog" },
    { to: "/cv", title: "C.V." },
  ]

  const handleClick = () => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logoWrapper}>
          <Img
            className={styles.thumbnail}
            fixed={data.profilePicture.childImageSharp.fixed}
            alt="Dave"
          />

          <span className={styles.siteTitle}>
            {data.site.siteMetadata.title}
            <span className={styles.siteSubTitle}>
              {data.site.siteMetadata.description}
            </span>
          </span>
        </Link>
        <ul className={styles.menu}>
          {menu.map((item, index) => (
            <li key={`menu-item-${index}`} className={styles.menuItem}>
              <Link
                to={item.to}
                className={styles.menuItemLink}
                activeClassName={styles.menuItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={handleClick} className={styles.menuButton}>
          Menu
        </button>
      </div>
      {mobileMenuVisible && (
        <div className={styles.mobileNav} onClick={handleClick}>
          {menu.map((item, index) => (
            <Link
              key={`mobile-item-${index}`}
              to={item.to}
              className={styles.menuItemLink}
              activeClassName={styles.menuItemLinkActive}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Navigation
