import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import BlockContent from "../block-content"
import Wrapper from "../atoms/wrapper"
import SEO from "../atoms/seo"
import styles from "./postSingle.module.css"
import { getBlogUrl } from "../../helpers/helpers"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      title
      excerpt
      slug {
        current
      }
      author {
        name
      }
      mainImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
    media: sanityPost(id: { eq: $id }) {
      mainImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

type TPostSingle = {
  data: {
    post: {
      id: string
      publishedAt: string
      title: string
      excerpt: string
      slug: {
        current: string
      }
      author: {
        name: string
      }
      mainImage: any /* ToDo: Fix typings on this */
      _rawBody: any /* ToDo: Fix typings on this */
    }
    media: any /* ToDo: Fix typings on this */
  }
}

const PostSingle: FunctionComponent<TPostSingle> = ({ data }) => {
  const { id, title, excerpt, publishedAt, _rawBody, slug } = data.post
  const { mainImage } = data.media

  const disqusShortname = "dave-van-hoorn"
  const disqusConfig: { url: string; identifier: string; title: string } = {
    url: getBlogUrl(publishedAt, slug.current),
    identifier: id,
    title: title,
  }

  return (
    <Wrapper>
      <SEO
        title={title}
        description={excerpt}
        imageUrl={mainImage.asset.fluid.src}
        postUrl={getBlogUrl(publishedAt, slug.current)}
        publishedAt={publishedAt}
        type={"article"}
      />
      <article className={styles.wrapper}>
        <header>
          <h1>{title}</h1>
        </header>
        {_rawBody && <BlockContent blocks={_rawBody} />}
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </article>
    </Wrapper>
  )
}

export default PostSingle
