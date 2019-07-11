import { format } from "date-fns"
import nlLocale from "date-fns/locale/nl"
import { graphql } from "gatsby"
import React from "react"
import BlockContent from "../block-content"
import Layout from "../layout"
import SEO from "../SEO"
import { DiscussionEmbed } from "disqus-react"

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
    id,
    title,
    excerpt,
    publishedAt,
    slug,
    _rawBody,
    author,
  } = props.data.post

  const disqusShortname = "dave-van-hoorn"
  const disqusConfig = {
    identifier: id,
    title: title,
  }

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
        <section>
          <p className="mt-10 mb-10 text-center text-3xl lg:text-4xl text-gray-800 font-semibold mt-4 leading-tight">
            Vragen?
          </p>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </section>
      </article>
    </Layout>
  )
}

export default PostSingle
