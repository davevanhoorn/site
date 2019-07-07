import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { format } from "date-fns"

const PostCard = props => {
  const {
    title,
    excerpt,
    categories,
    author,
    publishedAt,
    mainImage,
    slug,
  } = props.data

  return (
    <article className="flex mt-6 mb-12">
      <Link
        to={`/${format(publishedAt, "YYYY/MM")}/${slug.current}/`}
        className="mx-auto max-w-sm w-full lg:max-w-full lg:flex"
      >
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Img
            className="object-cover w-full h-full"
            alt="Avatar of Dave van Hoorn"
            fluid={mainImage.asset.fluid}
          />
        </div>
        <div className="flex-grow border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-3">
            <div className="text-gray-800 font-semibold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">{excerpt}</p>
          </div>
          <div className="pb-6">
            {categories.map(category => (
              <span
                key={category._id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {category.title}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <Img
              className="w-10 h-10 rounded-full mr-4"
              alt={`Avatar of ${author.name}`}
              fluid={author.image.asset.fluid}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{author.name}</p>
              <p className="text-gray-600">{publishedAt}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
