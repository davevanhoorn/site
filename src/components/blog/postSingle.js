import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import BlockContent from "../block-content"
import SEO from "../SEO"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      excerpt
      slug {
        current
      }
      mainImage {
        asset {
          fluid(maxWidth: 576) {
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
  }
`

const PostSingle = props => {
  const { title, excerpt, mainImage, slug, _rawBody } = props.data.post
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt || ""}
        image={mainImage.asset.fluid.src}
        pathname={slug.current}
        article
      />
      <article className="pb-12">
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
