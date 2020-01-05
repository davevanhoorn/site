import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import { getBlogUrl } from "../../helpers/helpers"
import styles from "./excerpt.module.css"

type TExcerptProps = {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
}

const Excerpt: FunctionComponent<TExcerptProps> = ({
  title,
  excerpt,
  slug,
  publishedAt,
}) => (
  <div className={styles.article}>
    <Link className={styles.link} to={getBlogUrl(publishedAt, slug)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{excerpt}</p>
    </Link>
  </div>
)

export default Excerpt
