import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

const serializers = {
  types: {
    code: ({ node = {} }) => {
      const { code, language } = node
      if (!code) {
        return null
      }
      return (
        <SyntaxHighlighter
          showLineNumbers="true"
          style={xonokai}
          language={language}
        >
          {code}
        </SyntaxHighlighter>
      )
    },
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <h1 className="text-5xl lg:text-6xl text-gray-800 font-bold leading-tight mb-2">
              {props.children}
            </h1>
          )

        case "h2":
          return (
            <h2 className="text-3xl lg:text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h2>
          )

        case "h3":
          return (
            <h3 className="text-3xl lg:text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h3>
          )

        case "h4":
          return (
            <h4 className="text-3xl lg:text-4xl text-gray-700 font-semibold mt-4 mb-2">
              {props.children}
            </h4>
          )

        default:
          return (
            <p className="lg:text-lg py-3 leading-relaxed text-gray-700">
              {props.children}
            </p>
          )
      }
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
