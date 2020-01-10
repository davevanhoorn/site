import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { TSiteMetaData } from "../atoms/seoTypes"
import styles from "./header.module.css"
import dave from "../../assets/images/dave.jpg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Header: FunctionComponent = () => {
  const data: TStaticQuerySite = useStaticQuery(graphql`
    query {
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
    { to: "/", title: "Home" },
    { to: "/cv", title: "C.V." },
  ]

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logoWrapper}>
          <img className={styles.thumbnail} src={dave} alt="Dave" />
          <span className={styles.siteTitle}>
            {data.site.siteMetadata.title}
            <span className={styles.siteSubTitle}>
              {data.site.siteMetadata.description}
            </span>
          </span>
        </Link>

        <Link to={"/menu"} className={styles.menuButton}>
          Menu
        </Link>
      </div>
    </>
  )
}

export default Header
