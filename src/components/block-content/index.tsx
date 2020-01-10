import React, { FunctionComponent } from "react"
import BaseBlockContent from "@sanity/block-content-to-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import classnames from "classnames"

import { urlFor } from "../../helpers/helpers"
import styles from "./index.module.css"

const CounterWrapper: FunctionComponent<{
  finished: boolean
  count: number
}> = ({ finished, count, children }) => {
  console.log(count)
  return (
    <div
      className={classnames({
        [styles.opacity80]: !finished && count === 6,
        [styles.opacity60]: !finished && count === 5,
        [styles.opacity40]: !finished && count === 4,
        [styles.opacity20]: !finished && count === 3,
        [styles.opacity10]: !finished && count === 2,
        [styles.opacity05]: !finished && count === 1,
      })}
    >
      {children}
    </div>
  )
}

const serializersWithCount = (finished: boolean, count: number) => {
  let counter = count
  return {
    list: ({ children }: { children: any }) => <ul>{children}</ul>,
    listItem: ({ children }: { children: any }) => {
      counter--
      return <li>{children}</li>
    },
    types: {
      image: ({ node }: { node: any }) => {
        const { asset, caption } = node
        return (
          <CounterWrapper finished={finished} count={counter--}>
            <figure className={styles.postFigure}>
              <img
                src={urlFor(asset._ref)
                  .width(968)
                  .url()}
                alt={caption}
              />
              {caption && (
                <figcaption className={styles.postFigCaption}>
                  {caption}
                </figcaption>
              )}
            </figure>
          </CounterWrapper>
        )
      },
      code: ({ node }: { node: any }) => {
        const { code, language } = node
        let highlightedLines: number[] = []
        if (!code) {
          return null
        }
        if (node.highlightedLines) {
          highlightedLines = node.highlightedLines
        }
        return (
          <CounterWrapper finished={finished} count={counter--}>
            <SyntaxHighlighter
              showLineNumbers={true}
              style={xonokai}
              language={language}
              className={styles.postSyntax}
              wrapLines={true}
              lineProps={(lineNumber: number) => ({
                className:
                  highlightedLines.length &&
                  !highlightedLines.includes(lineNumber)
                    ? "greyscale"
                    : "",
              })}
            >
              {code}
            </SyntaxHighlighter>
          </CounterWrapper>
        )
      },
      block(props: any) {
        switch (props.node.style) {
          case "h1":
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <h1>{props.children}</h1>
              </CounterWrapper>
            )

          case "h2":
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <h2>{props.children}</h2>
              </CounterWrapper>
            )

          case "h3":
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <h3>{props.children}</h3>
              </CounterWrapper>
            )

          case "h4":
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <h4>{props.children}</h4>
              </CounterWrapper>
            )

          case "ul":
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <ul>{props.children}</ul>
              </CounterWrapper>
            )

          default:
            return (
              <CounterWrapper finished={finished} count={counter--}>
                <p>{props.children}</p>
              </CounterWrapper>
            )
        }
      },
    },
  }
}

const BlockContent = ({
  blocks,
  finished,
}: {
  blocks: any
  finished: boolean
}) => (
  <BaseBlockContent
    finished={finished}
    blocks={blocks}
    serializers={serializersWithCount(finished, blocks.length)}
  />
)

export default BlockContent
