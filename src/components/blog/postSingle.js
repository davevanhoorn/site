import { format } from "date-fns"
import nlLocale from "date-fns/locale/nl"
import { graphql } from "gatsby"
import React from "react"
import BlockContent from "../block-content"
import Layout from "../layout"
import SEO from "../SEO"

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
      categories {
        _id
        title
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

const PostSingle = props => {
  const {
    title,
    excerpt,
    publishedAt,
    slug,
    _rawBody,
    author,
  } = props.data.post
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt || ""}
        image={props.data.media.mainImage.asset.fluid.src}
        pathname={format(publishedAt, "YYYY/MM") + "/" + slug.current + "/"}
        author={author}
        article
      />
      <article className="pb-12">
        <time
          className="pt-1 pb-6 text-center text-xs text-gray-700 block"
          dateTime={format(publishedAt, "YYYY-MM-DD HH:MM")}
        >
          {format(publishedAt, "dddd D MMMM YYYY", { locale: nlLocale })}
        </time>
        <header>
          <h1 className="text-4xl md:text-5xl text-gray-800 font-bold leading-tight mb-2">
            {title}
          </h1>
        </header>
        {_rawBody && <BlockContent blocks={_rawBody} />}
      </article>
    </Layout>
  )
}

export default PostSingle
