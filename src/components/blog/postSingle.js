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

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

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
        {_rawBody && (
          <BlockContent blocks={_rawBody} serializers={serializers} />
        )}
      </article>
    </Layout>
  )
}

export default PostSingle
