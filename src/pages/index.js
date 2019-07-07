import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Post from "../components/blog/post"

const Blog = () => (
  <Layout>
    <Helmet>
      <title>Front-End Development Tips & Tricks 💯| Dave van Hoorn</title>
      <meta
        name="description"
        content="Personal Front-End Development tips, tricks and stories from Dave van Hoorn, developer at Capgemini Netherlands."
      />
    </Helmet>
    <section>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </section>
  </Layout>
)

export default Blog
