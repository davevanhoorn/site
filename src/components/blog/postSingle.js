import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import BlockContent from "../block-content"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      slug {
        current
      }
      id
      title
      categories {
        _id
        title
      }
      _rawBody
    }
  }
`

const PostSingle = props => {
  const { title, _rawBody } = props.data.post
  return (
    <Layout>
      <article>
        <header>
          <h1 className="text-6xl text-gray-800 font-bold leading-tight mb-2">
            {title}
          </h1>
        </header>
        {_rawBody && <BlockContent blocks={_rawBody} />}
      </article>
    </Layout>
  )
}

export default PostSingle
