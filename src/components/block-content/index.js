import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <h1 className="text-5xl text-gray-800 font-bold leading-tight mb-6">
              {props.children}
            </h1>
          )

        case "h2":
          return (
            <h2 className="text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h2>
          )

        case "h3":
          return (
            <h3 className="text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h3>
          )

        case "h4":
          return (
            <h4 className="text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h4>
          )

        default:
          if (
            Array.isArray(props.children) &&
            props.children[0] &&
            typeof props.children[0] === "object"
          ) {
            return <pre>{props.children}</pre>
          } else {
            return (
              <p className="py-3 leading-relaxed text-gray-700 text-lg">
                {props.children}
              </p>
            )
          }
      }
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
