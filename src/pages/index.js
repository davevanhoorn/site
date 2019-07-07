import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Blog = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>Blog</div>
  </Layout>
)

export default Blog
