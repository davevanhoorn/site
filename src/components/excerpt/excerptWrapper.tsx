import React, { FunctionComponent } from "react"

import Excerpt from "./excerpt"
import styles from "./excerpt.module.css"
import { TPost } from "../post/postTypes"

type TExcerptWrapperProps = {
  posts: TPost[]
}

const ExcerptWrapper: FunctionComponent<TExcerptWrapperProps> = ({ posts }) => {
  return (
    <div className={styles.wrapper}>
      {posts.map((post: TPost, index: number) => {
        const { node } = post
        return (
          <Excerpt
            key={`excerpt-${index}`}
            title={node.title}
            excerpt={node.excerpt}
            slug={node.slug.current}
            publishedAt={node.publishedAt}
            language={node.language.slug}
          />
        )
      })}
    </div>
  )
}

export default ExcerptWrapper
